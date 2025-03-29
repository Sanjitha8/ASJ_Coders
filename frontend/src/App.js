import React from "react";
import Navbar from "./components/Navbar";
import ComplaintForm from "./components/ComplaintForm";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-6">
        <ComplaintForm />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
