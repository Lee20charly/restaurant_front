// pages/index.js
import { useState } from 'react';

export default function Bare_Shearch() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value).then(setSuggestions);
  };

  return (
    <div>
      <form action="/search" method="GET">
        <input
          type="text"
          name="query"
          placeholder="Rechercher..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">🔎</button>
      </form>
      <div className="suggestions">
        {suggestions.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <style jsx>{`
        form {
          display: flex;
          align-items: center;
        }
        input[type="text"] {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-right: 10px;
        }
        button {
          padding: 10px 15px;
          font-size: 16px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:hover {
          background-color: #0056b3;
        }
        .suggestions {
          position: absolute;
          background-color: white;
          border: 1px solid #ccc;
          border-radius: 4px;
          max-height: 200px;
          overflow-y: auto;
          width: calc(100% - 20px);
          margin-top: 5px;
        }
        .suggestions div {
          padding: 10px;
          cursor: pointer;
        }
        .suggestions div:hover {
          background-color: #f0f0f0;
        }
      `}</style>
    </div>
  );
}

// pages/api/suggestions.js
export default function handler(req, res) {
  const { query } = req.query;
  const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];
  res.status(200).json({ suggestions });
}

async function fetchSuggestions(query) {
  const response = await fetch(`/api/suggestions?query=${query}`);
  const data = await response.json();
  return data.suggestions;
}
