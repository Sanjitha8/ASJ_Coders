import React, { useState } from "react";
import axios from "axios";

function ComplaintForm() {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/predict", {
        description,
        user_id: "user123",
      });
      setCategory(response.data.category);
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Submit a Cybercrime Complaint</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Describe the cybercrime..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {loading ? "Processing..." : "Classify Complaint"}
        </button>
      </form>
      {category && (
        <div className="mt-4 p-3 bg-green-100 border-l-4 border-green-500">
          <h3 className="font-semibold">Predicted Category:</h3>
          <p>{category}</p>
        </div>
      )}
    </div>
  );
}

export default ComplaintForm;
