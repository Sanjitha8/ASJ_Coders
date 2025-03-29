from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os

router = APIRouter()

UPLOAD_DIR = "backend/uploads/"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/evidence/upload/")
async def upload_evidence(complaint_id: str, file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, f"{complaint_id}_{file.filename}")
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    return {"message": "Evidence uploaded successfully", "file_path": file_path}
