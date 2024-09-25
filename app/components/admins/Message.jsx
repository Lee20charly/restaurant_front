"use client"
import { useState } from 'react';

const DashboardMessages = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Jean Dupont', subject: 'Question produit' },
    { id: 2, sender: 'Marie Martin', subject: 'Problème livraison' },
    { id: 3, sender: 'Pierre Lefebvre', subject: 'Demande remboursement' },
  ]);

  const handleView = (id) => {
    alert('Voir le message ' + id);
  };

  const handleDelete = (id) => {
    if (confirm('Supprimer le message ' + id + ' ?')) {
      setMessages(messages.filter((message) => message.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-6">Dashboard Admin - Messages</h1>
      <table className="min-w-full bg-white shadow-lg">
        <thead>
          <tr>
            <th className="py-3 px-6 bg-yellow-400 text-white text-left">ID</th>
            <th className="py-3 px-6 bg-yellow-400 text-white text-left">Expéditeur</th>
            <th className="py-3 px-6 bg-yellow-400 text-white text-left">Objet</th>
            <th className="py-3 px-6 bg-yellow-400 text-white text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} className="hover:bg-orange-100">
              <td className="py-3 px-6 border-b border-red-200">{message.id}</td>
              <td className="py-3 px-6 border-b border-red-200">{message.sender}</td>
              <td className="py-3 px-6 border-b border-red-200">{message.subject}</td>
              <td className="py-3 px-6 border-b border-red-200">
                <button
                  onClick={() => handleView(message.id)}
                  className="btn-view bg-yellow-400 text-white px-4 py-2 mr-2 rounded-md"
                >
                  Voir
                </button>
                <button
                  onClick={() => handleDelete(message.id)}
                  className="btn-delete bg-orange-600 text-white px-4 py-2 rounded-md"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardMessages;
