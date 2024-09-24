// app/components/admins/Bare_shearch.jsx
"use client";
import { useState } from 'react';
import Admin_droit from "./components/Admin_droit";

export default function Bare_Shearch() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        fetchSuggestions(e.target.value).then(setSuggestions);
    };

    return (
        <section className='flex justify-between items-center w-full h-[100%]'>
                <Admin_droit />
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
                }
            `}</style>
            </div>
           
        </section>
    );
}
