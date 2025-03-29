import os
import shutil

UPLOAD_DIR = "backend/uploads/"

def save_evidence(complaint_id: str, file):
    file_path = os.path.join(UPLOAD_DIR, f"{complaint_id}_{file.filename}")
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    return file_path
