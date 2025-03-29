import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import joblib

# Load the trained BERT model
model_path = "./models/bert-fine-tuned-1"
model = AutoModelForSequenceClassification.from_pretrained(model_path)
tokenizer = AutoTokenizer.from_pretrained(model_path)
label_encoder = joblib.load(model_path + "/label_encoder.pkl")

def classify_text(text):
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True, max_length=128)
    outputs = model(**inputs)
    prediction = torch.argmax(outputs.logits, dim=-1).item()
    return label_encoder.inverse_transform([prediction])[0]
