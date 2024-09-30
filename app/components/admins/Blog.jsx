"use client";
import { useState } from "react";

export default function ArticleForm() {
  const [articles, setArticles] = useState([
    { title: "Guide d'adaptation de mes...", date: "30/11/2024", image: null, schedule: "Lun-Ven 9h-18h" },
    { title: "Guide d'adaptation de mes...", date: "16/11/2024", image: null, schedule: "Mar-Sam 10h-19h" },
    { title: "Guide d'adaptation de mes...", date: "15/11/2024", image: null, schedule: "Lun-Dim 8h-20h" },
    { title: "Guide d'adaptation de mes...", date: "01/11/2024", image: null, schedule: "Mer-Dim 11h-22h" },
  ]);
  
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
    schedule: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      title: formData.title,
      date: new Date().toLocaleDateString("fr-FR"),
      image: imagePreview,
      schedule: formData.schedule,
    };

    setArticles([newArticle, ...articles]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      image: null,
      schedule: "",
    });
    setImagePreview(null);
  };

  const deleteArticle = (index) => {
    const updatedArticles = [...articles];
    updatedArticles.splice(index, 1);
    setArticles(updatedArticles);
  };

  const editArticle = (index) => {
    const articleToEdit = articles[index];
    setFormData({
      title: articleToEdit.title,
      content: "Contenu de l'article...", // Placeholder content
      schedule: articleToEdit.schedule,
    });
    setImagePreview(articleToEdit.image);
    deleteArticle(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Ajouter un article</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titre"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="3"
            placeholder="Contenu"
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Photo:</label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Aperçu"
              className="mt-2 max-w-[100px] max-h-[100px] object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Horaires:</label>
          <input
            type="text"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            placeholder="Ex: Lun-Ven 9h-18h, Sam 10h-16h"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-md">
          Enregistrer
        </button>
        <button type="button" onClick={resetForm} className="bg-yellow-500 text-black px-4 py-2 rounded-md ml-2">
          Annuler
        </button>
      </form>

      <table className="w-full mt-8 border-collapse">
        <thead>
          <tr>
            <th className="bg-gray-100 p-2">Titre</th>
            <th className="bg-gray-100 p-2">Date de publication</th>
            <th className="bg-gray-100 p-2">Photo</th>
            <th className="bg-gray-100 p-2">Horaires</th>
            <th className="bg-gray-100 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td className="border-b border-gray-300 p-2">{article.title}</td>
              <td className="border-b border-gray-300 p-2">{article.date}</td>
              <td className="border-b border-gray-300 p-2">
                {article.image ? (
                  <img
                    src={article.image}
                    alt="Article"
                    className="max-w-[100px] max-h-[100px] object-cover"
                  />
                ) : (
                  "Aucune image"
                )}
              </td>
              <td className="border-b border-gray-300 p-2">{article.schedule}</td>
              <td className="border-b border-gray-300 p-2">
                <button
                  onClick={() => editArticle(index)}
                  className="bg-yellow-500 text-black px-3 py-1 rounded-md mr-2"
                >
                  Modifier
                </button>
                <button
                  onClick={() => deleteArticle(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
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
