

import Admin_droit from "../components/Admin_droit";
import Nav_bar from "../components/Nav_bar";



const ReservationPage = () => {
  return (
    <div className="w-[100%] h-[100%] bg-white flex-col flex">


      <Nav_bar className="justify-start absolute" />

      <div className="flex justify-between border-t-2 border-black ">

        <Admin_droit className="justify-end" />

        <section className="bg-white text-black w-full sm:w-9/12 h-auto p-4 sm:p-8 justify-center my-10 mx-auto shadow-lg">
        <div className="container mx-auto my-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Réservations du jour</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-yellow-400 text-gray-600 uppercase text-xs sm:text-sm leading-normal">
                  <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Heure</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 text-left">Client</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 text-center">Nombre de Personnes</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 text-center">Statut</th>
                  <th className="py-2 sm:py-3 px-2 sm:px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-xs sm:text-sm font-light">
                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">18:30</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">John Doe</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-center">4</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-center">
                    <span className="py-1 px-2 sm:px-3 rounded-full text-xs">Confirmée</span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-center">
                    <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-md hover:bg-blue-600">
                      Confirmer
                    </button>
                    <button className="bg-red-500 text-white px-2 sm:px-3 py-1 ml-2 rounded-md hover:bg-red-600">
                      Annuler
                    </button>
                  </td>
                </tr>

                <tr className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">19:00</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-left">Jane Smith</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-center">2</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-center">
                    <span className="py-1 px-2 sm:px-3 rounded-full text-xs">En attente</span>
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-6 text-center">
                    <button className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-md hover:bg-blue-600">
                      Confirmer
                    </button>
                    <button className="bg-red-500 text-white px-2 sm:px-3 py-1 ml-2 rounded-md hover:bg-red-600">
                      Annuler
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
        
      </div>

    </div>
  );
};

export default ReservationPage;

