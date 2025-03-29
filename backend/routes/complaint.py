from fastapi import APIRouter, Depends, HTTPException
from pymongo import MongoClient
from database.db import get_database
from pydantic import BaseModel
from bson import ObjectId

class ComplaintStatusResponse(BaseModel):
    complaint_id: str
    status: str

router = APIRouter()

@router.get("/complaint/status/{complaint_id}", response_model=ComplaintStatusResponse)
def get_complaint_status(complaint_id: str, db: MongoClient = Depends(get_database)):
    try:
        object_id = ObjectId(complaint_id)  
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid complaint ID format")
    
    complaint = db.complaints.find_one({"_id": object_id})
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    
    return ComplaintStatusResponse(complaint_id=str(complaint["_id"]), status=complaint.get("status", "Pending"))
