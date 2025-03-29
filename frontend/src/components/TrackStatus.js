import React, { useState } from "react";
import axios from "axios";

const TrackStatus = () => {
  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState("");

  const fetchStatus = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/complaint/status/${complaintId}`);
      setStatus(response.data.status);
    } catch (error) {
      setStatus("Complaint not found");
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-xl font-bold mb-4">Track Complaint Status</h2>
      <input
        type="text"
        placeholder="Enter Complaint ID"
        className="border p-2 w-full mb-2"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={fetchStatus}
      >
        Track
      </button>
      {status && <p className="mt-2 text-blue-500">Status: {status}</p>}
    </div>
  );
};

export default TrackStatus;
