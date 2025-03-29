import React, { useState } from "react";
import axios from "axios";

const UploadEvidence = () => {
  const [complaintId, setComplaintId] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!file || !complaintId) {
      setMessage("Please enter Complaint ID and select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://localhost:8000/evidence/upload/?complaint_id=${complaintId}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error uploading evidence.");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload Evidence</h2>
      <input
        type="text"
        placeholder="Enter Complaint ID"
        className="border p-2 w-full mb-2"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
      />
      <input
        type="file"
        className="border p-2 w-full mb-2"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleFileUpload}
      >
        Upload
      </button>
      {message && <p className="mt-2 text-red-500">{message}</p>}
    </div>
  );
};

export default UploadEvidence;
