import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText }),
      });

      const data = await response.json();
      setResponse(data.message);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <Router>
      <div>
        <h1>BookMan</h1>
        <Link to="/borrowings/new">New Borrowing</Link>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
