export default function Admin_droit() {
    return (
        <section className="w-[405px] h-[100%] bg-white flex flex-col justify-between gap-[410px]">
            <div className="flex flex-col items-center">
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-home-4-line"></i>
                    <p>Accueil</p>
                </a>
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-calendar-line"></i>
                    <p>Reservations</p>
                </a>
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-table-line"></i>
                    <p>Gestion des tables</p>
                </a>
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-restaurant-line"></i>
                    <p>Gestion des menus</p>
                </a>
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-file-list-line"></i>
                    <p>Blog</p>
                </a>
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-message-line"></i>
                    <p>Message</p>
                </a>
            </div>
            <div className="flex flex-col items-center">
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-customer-service-2-line"></i>
                    <p>Support</p>
                </a>
                <a className="w-[90%] h-14 text-black hover:bg-red-600 flex items-center gap-2" href="">
                    <i className="ri-settings-3-line"></i>
                    <p>Parametres</p>
                </a>
            </div>
        </section>
    );
}
