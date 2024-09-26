export default function Admin_droit() {
  return (
    <section className="w-[25%] h-[40%] bg-white flex flex-col justify-between min-h-screen  gap-[]">
      <div className="flex flex-col items-center mt-4">
        <a
          className="w-[90%] h-14 text-black font-bold hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-home-4-line"></i>{" "}
          <img
            src="\assets\home.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Accueil</p>
        </a>
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-calendar-line"></i>
          <img
            src="\assets\star.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Reservations</p>
        </a>
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-table-line"></i>
          <img
            src="\assets\pie-chart-alt-2.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Gestion des tables</p>
        </a>
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-restaurant-line"></i>
          <img
            src="\assets\bar-chart-alt-2.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Gestion des menus</p>
        </a>
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-file-list-line"></i>
          <img
            src="\assets\archive.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Blog</p>
        </a>
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-message-line"></i>
          <img
            src="\assets\layer.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Message</p>
        </a>
      </div>


      <div className="flex flex-col items-center mt-auto">
        
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-customer-service-2-line"></i>
          <img
            src="\assets\aide.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Support</p>
        </a>
        <a
          className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2"
          href=""
        >
          <i className="ri-settings-3-line"></i>
          <img
            src="\assets\paramettre.svg"
            // alt="image home"
            className=""
            width={24}
            height={24}
          />
          <p>Parametres</p>
        </a>
      </div>
    </section>
  );
}
