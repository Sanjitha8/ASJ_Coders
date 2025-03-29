from pymongo import MongoClient

def get_complaint_status(db: MongoClient, complaint_id: str):
    complaint = db.complaints.find_one({"_id": complaint_id})
    return complaint.get("status", "Pending") if complaint else "Not Found"
