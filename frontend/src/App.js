import "./App.css";
import AppRoutes from "./routes";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RouteConstants } from "./route-constants";

function App() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputText }),
      });

      const data = await response.json();
      setResponse(data.message);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h1>BookMan</h1>
      {/* INFO: Added About us link */}
      <Link to={RouteConstants.baseUrl}>About Us</Link>{" "}
      <Link to={RouteConstants.borrowing}>New Borrowing</Link>
      <AppRoutes />
    </div>
  );
}

export default App;
