import React, { useState } from 'react';
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
    <div>
      <h1>Flask React App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a string:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response from Backend:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
