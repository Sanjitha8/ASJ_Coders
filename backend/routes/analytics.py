from fastapi import APIRouter
from database.db import complaints_collection

get_analytics = APIRouter()

@get_analytics.get("/analytics")
def fetch_analytics():
    pipeline = [{"$group": {"_id": "$predicted_category", "count": {"$sum": 1}}}]
    results = list(complaints_collection.aggregate(pipeline))
    return {"data": results}
