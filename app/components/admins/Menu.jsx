"use client";
import { useState } from "react";

const MenuManager = () => {
  const [menu, setMenu] = useState([
    {
      name: "Soupe de poisson aux poissons fumées",
      description: "Délicieuse soupe de poisson traditionnelle",
      category: "Entrée",
      price: "7500",
      photo: "/a/c66f7924-0e33-480e-a2bc-13f1856e2121",
    },
  ]);

  const [dish, setDish] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    photo: null,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setDish((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setDish((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      const updatedDish = {
        ...dish,
        photo: dish.photo
          ? URL.createObjectURL(dish.photo)
          : menu[editIndex].photo,
      };
      setMenu((prev) => {
        const updatedMenu = [...prev];
        updatedMenu[editIndex] = updatedDish;
        return updatedMenu;
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      const newDish = {
        ...dish,
        photo: dish.photo
          ? URL.createObjectURL(dish.photo)
          : "/491be492708a0a052dc13d16e4f2a925.jpg",
      };
      setMenu((prev) => [...prev, newDish]);
    }

    setDish({ name: "", description: "", category: "", price: "", photo: null });
  };

  const removeDish = (index) => {
    setMenu((prev) => prev.filter((_, i) => i !== index));
  };

  const editDish = (index) => {
    const selectedDish = menu[index];
    setDish({
      name: selectedDish.name,
      description: selectedDish.description,
      category: selectedDish.category,
      price: selectedDish.price,
      photo: null, // The photo needs to be re-uploaded for now.
    });
    setIsEditing(true);
    setEditIndex(index);
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-white rounded shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        {isEditing ? "Modifier le plat" : "Ajouter des plats"}
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nom du plat"
          value={dish.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={dish.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <select
          name="category"
          value={dish.category}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        >
          <option value="">Catégorie</option>
          <option value="Entrée">Entrée</option>
          <option value="Plat">Plat</option>
          <option value="Dessert">Dessert</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Prix"
          value={dish.price}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="file"
          id="dishPhoto"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="bg-red-500 text-white px-2 py-2 rounded"
            onClick={() => document.getElementById("dishPhoto").click()}
          >
            {dish.photo ? "Changer la photo" : "Ajouter une photo"}
          </button>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-2 py-2 rounded "
          >
            {isEditing ? "Modifier le plat" : "Ajouter au menu"}
          </button>
        </div>
      </form>

      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Menu actuel</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-yellow-300">Photo</th>
              <th className="border border-gray-300 p-2 bg-yellow-300">Nom</th>
              <th className="border border-gray-300 p-2 bg-yellow-300">Description</th>
              <th className="border border-gray-300 p-2 bg-yellow-300">Catégorie</th>
              <th className="border border-gray-300 p-2 bg-yellow-300">Prix</th>
              <th className="border border-gray-300 p-2 bg-yellow-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((dish, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">
                  <img
                    src={dish.photo}
                    alt={dish.name}
                    className="w-12 h-12 object-cover sm:w-16 sm:h-16"
                  />
                </td>
                <td className="border border-gray-300 p-2">{dish.name}</td>
                <td className="border border-gray-300 p-2">{dish.description}</td>
                <td className="border border-gray-300 p-2">{dish.category}</td>
                <td className="border border-gray-300 p-2">{dish.price}</td>
                <td className="border border-gray-300 p-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white text-xs px-3 py-1 rounded"
                    onClick={() => editDish(index)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 text-white text-xs px-3 py-1 rounded"
                    onClick={() => removeDish(index)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuManager;
