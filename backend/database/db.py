from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["cybercrime_db"]
complaints_collection = db["complaints"]
