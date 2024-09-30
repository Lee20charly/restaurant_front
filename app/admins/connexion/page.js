


const HomePage = () => {
  return (
    <> 
    <section className="bg-white w-9/12 h-auto p-8 rounded-lg justify-center my-10 mx-auto shadow-lg ">
  <div className="text-black text-2xl font-bold mb-4  ">Logo</div>
  <div className="border border-black p-4">
  <form id="form" className="space-y-6">
    <h1 className="text-black text-3xl font-bold">Connexion</h1>
    <h3 className="text-black text-lg mb-4">Bienvenue sur votre Dashboard Administrateur</h3>

    <div>
      <input type="text" name="nom" placeholder="Nom" required className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent" />
    </div>
    <div>
      <input type="email" name="email" placeholder="E-mail" required className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/>
    </div>
    <div className="flex justify-center">
      <button id="submit" type="submit" className="bg-black text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-300" >
        Connexion
      </button>
    </div>
  </form>
  </div>
</section>

    </>
  );
};


export default HomePage;