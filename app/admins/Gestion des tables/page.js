import React from 'react';

const GestionTables = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Gestion des Tables</h1>
      
      <div className="config-panel mb-8">
        <h2 className="text-2xl font-semibold mb-4">Configuration des tables</h2>
        
        <div className="mb-4">
          <input type="text" id="table-number" placeholder="Numéro de table"  className="border rounded-lg p-2 mr-4" />
          <input type="number" id="table-capacity" placeholder="Capacité" className="border rounded-lg p-2"/>
        </div>
        
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-4">
            Ajouter une table
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            Ajouter au menu
          </button>
        </div>
      </div>
      
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Numéro</th>
            <th className="py-3 px-6 text-left">Capacité</th>
            <th className="py-3 px-6 text-left">Statut</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">1</td>
            <td className="py-3 px-6 text-left">4</td>
            <td className="py-3 px-6 text-left">Libre</td>
            <td className="py-3 px-6 text-center">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2">
                Modifier
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Supprimer
              </button>
            </td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">2</td>
            <td className="py-3 px-6 text-left">4</td>
            <td className="py-3 px-6 text-left">Occupé</td>
            <td className="py-3 px-6 text-center">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2">
                Modifier
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Supprimer
              </button>
            </td>
          </tr>

          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left">3</td>
            <td className="py-3 px-6 text-left">4</td>
            <td className="py-3 px-6 text-left">Réservé</td>
            <td className="py-3 px-6 text-center">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2">
                Modifier
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GestionTables;
