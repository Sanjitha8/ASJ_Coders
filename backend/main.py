from fastapi import FastAPI
from routes.predict import predict
from routes.analytics import get_analytics
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include routes
app.include_router(predict, prefix="/api")
app.include_router(get_analytics, prefix="/api")

@app.get("/")
def home():
    return {"message": "Cybercrime Classification API is Running"}
