'use client'; // Indique que c'est un Client Component

import { useState } from 'react';
import NotificationBell from './NotificationBell';

// Données fictives en JSON
const fakeData = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
  { id: 4, name: 'Anna Williams', email: 'anna@example.com' },
  { id: 5, name: 'Paul Brown', email: 'paul@example.com' },
];

export default function Bare_Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError('Le champ de recherche est vide.');
      setResults([]);
      return;
    }

    // Filtrer les fausses données
    const filteredData = fakeData.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) || 
        item.email.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredData.length === 0) {
      setError('Aucun résultat trouvé.');
    } else {
      setError(null);
      setResults(filteredData); // Mettre à jour les résultats de la recherche
    }
  };

  return (
    <section className="relative bg-white items-center w-full h-16 flex justify-between p-12">
      {/* Logo aligné à gauche */}
      <p className="text-2xl font-bold text-black">Logo</p>

      {/* Barre de recherche centrée */}
      <form onSubmit={handleSearch} className="relative flex-1 flex justify-center">
        <input
          className="w-[500px] h-[40px] bg-transparent border-2 border-black pl-4"
          type="text"
          placeholder="Rechercher..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        {/* Affichage des résultats de la recherche sous la barre */}
        {results.length > 0 && (
          <div className="absolute top-[50px] w-[500px] bg-white border border-black shadow-lg items-center justify-center">
            <ul>
              {results.map((result) => (
                <li key={result.id} className="px-4 py-2 text-black hover:bg-gray-200">
                  {result.name} - {result.email}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>

      {/* Cloche de notification en haut à droite */}
      <div className="absolute top-4 right-4">
        <NotificationBell />
      </div>

      {/* Affichage des erreurs */}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </section>
  );
}
