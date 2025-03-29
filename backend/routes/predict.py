from fastapi import APIRouter
from pydantic import BaseModel
from models.model import classify_text
from database.db import complaints_collection
from datetime import datetime

predict = APIRouter()

class ComplaintRequest(BaseModel):
    description: str
    user_id: str

@predict.post("/predict")
def process_complaint(complaint: ComplaintRequest):
    category = classify_text(complaint.description)

    
    complaint_record = {
        "user_id": complaint.user_id,
        "description": complaint.description,
        "predicted_category": category,
        "timestamp": datetime.now()
    }
    complaints_collection.insert_one(complaint_record)

    return {"category": category, "message": "Complaint processed successfully"}
