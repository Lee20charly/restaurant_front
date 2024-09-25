'use client';
import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Le mot de passe doit contenir au moins 8 caractères.');
      return;
    }

    console.log('Inscription soumise avec succès :', { username, email, password });

    setSuccessMessage('Inscription réussie ! Bienvenue parmi nous.');
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg transform transition-transform duration-300 hover:-translate-y-2">
        <h2 className="text-3xl font-extrabold text-center text-black mb-6">Inscription</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:border-red-600 focus:outline-none py-6 bg-transparent peer"
            />
            <label className="absolute left-0 top-2 text-black transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-red-600">
              Nom d'utilisateur
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:border-red-600 focus:outline-none py-6 bg-transparent peer"
            />
            <label className="absolute left-0 top-2 text-black transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-red-600">
              Adresse e-mail
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:border-red-600 focus:outline-none py-6 bg-transparent peer"
            />
            <label className="absolute left-0 top-2 text-black transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-red-600">
              Mot de passe
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border-b border-gray-300 focus:border-red-600 focus:outline-none py-6 bg-transparent peer"
            />
            <label className="absolute left-0 top-2 text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-red-600">
              Confirmer le mot de passe
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-all"
          >
            Confirmer
          </button>
        </form>

        {errorMessage && <p className="text-red-500 text-center mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 text-center mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};
export default SignUp;