import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [analytics, setAnalytics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/analytics");
        setAnalytics(response.data.data);
      } catch (err) {
        setError("Failed to load analytics. Please check your API.");
        console.error("Error fetching analytics:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAnalytics();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Cybercrime Analytics</h2>

      {loading && <p className="text-blue-500">Loading analytics...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && analytics.length > 0 ? (
        <Bar
          data={{
            labels: analytics.map((a) => a._id),
            datasets: [
              {
                label: "Number of Cases",
                data: analytics.map((a) => a.count),
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Cybercrime Case Statistics" },
            },
          }}
        />
      ) : (
        !loading && !error && <p>No data available.</p>
      )}
    </div>
  );
}

export default Dashboard;
