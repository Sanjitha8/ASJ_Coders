# CyberCrime Classification System

## Overview
The **CyberCrime Classification System** is a web-based platform that enables users to submit cybercrime complaints, classify them using an AI model, upload supporting evidence, and track complaint statuses. It features a **FastAPI** backend with MongoDB for data storage and a **React.js** frontend for an intuitive user experience.

## Features
### 🔹 Backend (FastAPI & MongoDB)
- Complaint classification using a fine-tuned **BERT model**.
- **MongoDB** for complaint storage and status tracking.
- **FastAPI** for efficient API routing.
- Evidence upload support (images, PDFs, etc.).
- Complaint tracking via unique complaint ID.

### 🔹 Frontend (React.js & TailwindCSS)
- **Intuitive UI** for submitting complaints.
- File upload option for supporting evidence.
- Complaint history & status tracking.
- Interactive analytics dashboard for cybercrime insights.

---

## 🏗️ Project Structure
```
CyberCrime-Classification/
│── backend/                     # FastAPI Backend
│   ├── models/                  # Model directory
│   │   ├── bert-fine-tuned-1/   # Trained BERT Model
│   │   ├── model.py             # Model loading & processing
│   ├── database/                # Database connection
│   │   ├── db.py                # MongoDB setup
│   ├── routes/                  # API Routes
│   │   ├── predict.py           # Complaint classification route
│   │   ├── analytics.py         # Dashboard analytics route
│   │   ├── complaint.py         # Complaint tracking & file upload
│   ├── main.py                  # FastAPI entry point
│
│── frontend/                    # React.js Frontend
│   ├── src/
│   │   ├── components/          # UI Components
│   │   ├── pages/               # App Pages
│   │   ├── App.js               # Main React Component
│   │   ├── index.js             # Entry point
│
│── database/                    # Database Configuration
│── deployment/                  # Deployment Configurations
│── README.md                    # Documentation
```

---

## 🚀 Getting Started
### 🔧 Backend Setup
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-repo/cybercrime-classification.git
   cd cybercrime-classification/backend
   ```
2. **Create a virtual environment & install dependencies:**
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```
3. **Run the FastAPI server:**
   ```sh
   uvicorn main:app --reload
   ```
4. **Access API Docs:** [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 🎨 Frontend Setup
1. **Navigate to the frontend directory:**
   ```sh
   cd ../frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the React development server:**
   ```sh
   npm start
   ```
4. **Access the UI:** [http://localhost:3000](http://localhost:3000)

---

## 📌 API Endpoints
### 1️⃣ Classify a Complaint
- **POST** `/api/predict`
- **Request Body:**
  ```json
  {
    "description": "I received a phishing email asking for my credentials.",
    "user_id": "user123"
  }
  ```
- **Response:**
  ```json
  {
    "category": "Phishing"
  }
  ```

### 2️⃣ Upload Evidence
- **POST** `/api/complaint/upload`
- **Form Data:**
  - `complaint_id` (string)
  - `file` (image/pdf)
- **Response:**
  ```json
  {
    "message": "File uploaded successfully"
  }
  ```

### 3️⃣ Get Complaint Status
- **GET** `/complaint/status/{complaint_id}`
- **Response:**
  ```json
  {
    "complaint_id": "12345",
    "status": "Under Investigation"
  }
  ```

---

## 📊 Planned Features & Improvements
✅ **User Authentication** (Login/Register functionality)  
✅ **SMS/Email Notifications** for complaint updates  
✅ **Advanced NLP Enhancements** to improve classification  
✅ **Admin Dashboard** for law enforcement  
✅ **Multi-language Support** for better accessibility  

---

## 🛠️ Deployment
1. **Docker Setup**
   ```sh
   docker-compose up --build
   ```
2. **Cloud Deployment (AWS, GCP, etc.)**
   - Follow `deployment/cloud-deployment.md`

Here I have attached the models and datasets as it consist of large size. kindly use it in respective path locally.

link -> https://drive.google.com/drive/folders/1tvU-jqDaeOiddKijXmwdth6Q5fN2eWuR?usp=sharing
