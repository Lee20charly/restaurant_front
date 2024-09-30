"use client";
import { useState } from "react";

export default function ParaForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    accessRights: {
      reservation: true,
      menu: true,
      blog: true,
      table: true,
      message: true,
    },
  });

  const [admins, setAdmins] = useState([
    { name: "Admin1", email: "Admin1@gmail.com", rights: "Gestion des tables" },
    { name: "Admin2", email: "Admin2@gmail.com", rights: "Gestion des blogs" },
    { name: "Admin3", email: "Admin3@gmail.com", rights: "Gestion des messages" },
  ]);

  const [editingIndex, setEditingIndex] = useState(null); // Nouvel état pour suivre l'index de l'admin en modification

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        accessRights: {
          ...prevData.accessRights,
          [value]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAdmin = {
      name: formData.username,
      email: formData.email,
      rights: Object.keys(formData.accessRights)
        .filter((key) => formData.accessRights[key])
        .join(", "),
    };

    if (editingIndex !== null) {
      // Si on modifie un admin existant
      const updatedAdmins = [...admins];
      updatedAdmins[editingIndex] = newAdmin;
      setAdmins(updatedAdmins);
      setEditingIndex(null); // Réinitialiser l'index après modification
    } else {
      // Ajouter un nouvel admin
      setAdmins((prevAdmins) => [...prevAdmins, newAdmin]);
    }

    // Réinitialiser le formulaire
    setFormData({
      username: "",
      email: "",
      password: "",
      accessRights: {
        reservation: true,
        menu: true,
        blog: true,
        table: true,
        message: true,
      },
    });
  };

  const handleDelete = (index) => {
    // Supprimer l'administrateur de la liste
    const updatedAdmins = admins.filter((_, i) => i !== index);
    setAdmins(updatedAdmins);
  };

  const handleEdit = (index) => {
    // Charger les données de l'admin à modifier dans le formulaire
    const adminToEdit = admins[index];
    setFormData({
      username: adminToEdit.name,
      email: adminToEdit.email,
      password: "", // Ne pas afficher le mot de passe (à gérer séparément si besoin)
      accessRights: {
        reservation: adminToEdit.rights.includes("reservation"),
        menu: adminToEdit.rights.includes("menu"),
        blog: adminToEdit.rights.includes("blog"),
        table: adminToEdit.rights.includes("table"),
        message: adminToEdit.rights.includes("message"),
      },
    });
    setEditingIndex(index); // Mettre à jour l'index de l'admin en cours de modification
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {editingIndex !== null ? "Modifier un administrateur" : "Ajouter un administrateur"}
        </h1>
        <input
          type="text"
          name="username"
          placeholder="Nom de l'utilisateur"
          value={formData.username}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />
        <div className="mb-4">
          <p className="font-semibold mb-2">Droits d'accès</p>
          <div className="space-y-2 flex justify-between">
            {["reservation", "menu", "blog", "table", "message"].map((right) => (
              <label key={right} className="block">
                <input
                  type="checkbox"
                  name="access"
                  value={right}
                  checked={formData.accessRights[right]}
                  onChange={handleChange}
                  className="mr-2"
                />
                {`Gestion de ${right}`}
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:scale-105"
        >
          {editingIndex !== null ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <table className="w-full mt-8 border-collapse">
        <thead>
          <tr>
            <th className="bg-yellow-400 p-2 text-left">Nom</th>
            <th className="bg-yellow-400 p-2 text-left">E-mail</th>
            <th className="bg-yellow-400 p-2 text-left">Droit d'accès</th>
            <th className="bg-yellow-400 p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, index) => (
            <tr key={index}>
              <td className="border-b border-gray-300 p-2">{admin.name}</td>
              <td className="border-b border-gray-300 p-2">{admin.email}</td>
              <td className="border-b border-gray-300 p-2">{admin.rights}</td>
              <td className="border-b border-gray-300 p-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md mr-2"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
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
}
