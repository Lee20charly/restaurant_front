import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";


export function Footer() {
  return (
    <div>
      <footer className={`bg-black w-full justify-center flex items-center`}>
        {/* responsive div */}
        <section className={`${styles.foote2} flex flex-col w-[91%] gap-8 flex flex-col`}>
          <div className={`mt-5 flex justify-between`}>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex text-center items-center gap-1`}>
                <img
                  src="./assets/iconfoot1.svg"
                  alt=""
                  width={60}
                  height={60}
                  className={``}
                />
                <p className={`font-bold text-2xl text-white`}>
                  Heure d’ouverture
                </p>
              </div>
              <div className={`flex flex-col gap-1`}>
                <p className={`font-bold text-2xl text-white`}>
                  Lun-Sam : 11h - 23h
                </p>
                <p className={`font-bold text-2xl text-white`}>
                  Dimanche: 10h-17h
                </p>
              </div>
            </div>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex text-center items-center gap-1`}>
                <img
                  src="./assets/iconfoot3.svg"
                  alt=""
                  width={55}
                  height={55}
                  className={``}
                />
                <p className={`font-bold text-2xl text-white`}>Contact</p>
              </div>
              <div className={`flex flex-col gap-1`}>
                <p className={`font-bold text-2xl text-white`}>
                  Téléphone : +241 74 xx xx xx
                </p>
                <p className={`font-bold text-2xl text-white`}>
                  Email : info@example.com
                </p>
              </div>
            </div>
            <div className={`flex flex-col text-center gap-2`}>
              <div className={`flex gap-3 text-center items-center`}>
                <img
                  src="./assets/iconfoot2.svg"
                  alt=""
                  width={60}
                  height={60}
                  className={``}
                />
                <p className={`font-bold text-2xl text-white`}>Adresse</p>
              </div>
              <div className={`flex flex-col gap-1`}>
                <p className={`font-bold text-2xl text-white`}>
                  A108, rue Adams
                </p>
                <p className={`font-bold text-2xl text-white`}>
                  Libreville, Gabon
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col text-center items-center mt-10 justify-center gap-3`}
          >
            <div>
              <p className={`font-bold text-2xl text-white`}>Suivez nous</p>
            </div>
            <div className={`flex gap-4`}>
              <img
                src="./assets/facebook.svg"
                alt=""
                width={45}
                height={45}
                className={``}
              />
              <img
                src="./assets/link.svg"
                alt=""
                width={45}
                height={45}
                className={``}
              />
              <img 
                src="./assets/twiter.svg"
                alt=""
                width={45}
                height={45}
                className={``}
              />
               <Link href="#">
              <img
                src="./assets/instagram.svg"
                alt=""
                width={45}
                height={45}
                className={``} 
              /></Link>
            </div>
          </div>
        </section>
        <div
          className={` ${styles.foote1} w-[91%] gap-100 flex flex-col`}
        >
          {/* foot1 */}
          <div className={`mt-5 flex justify-between`}>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex text-center items-center`}>
                <img 
                  src="./assets/iconfoot1.svg"
                  alt=""
                  width={35}
                  height={35}
                  className={``}
                />
                <p className={`font-bold text-xs text-white`}>
                  Heure d’ouverture
                </p>
              </div>
              <div className={`flex flex-col gap-1`}>
                <p className={`font-bold text-xs text-white`}>
                  Lun-Sam : 11h - 23h
                </p>
                <p className={`font-bold text-xs text-white`}>
                  Dimanche: 10h-17h
                </p>
              </div>
            </div>
            <div className={`flex flex-col gap-2`}>
              <div className={`flex text-center items-center gap-1`}>
                <img
                  src="./assets/iconfoot3.svg"
                  alt=""
                  width={30}
                  height={30}
                  className={``}
                />
                <p className={`font-bold text-xs text-white`}>Contact</p>
              </div>
              <div className={`flex flex-col gap-1`}>
                <p className={`font-bold text-xs text-white`}>
                  Téléphone : +241 74 xx xx xx
                </p>
                <p className={`font-bold text-xs text-white`}>
                  Email : info@example.com
                </p>
              </div>
            </div>
          </div>
          {/* foot2 */}
          <div className={`flex justify-between text-center mt-4 mb-4 items-center`}>
            <div className={`flex flex-col text-center items-center gap-2`}>
              <div className={`flex gap-3 text-center items-center`}>
                <img
                  src="./assets/iconfoot2.svg"
                  alt=""
                  width={35}
                  height={35}
                  className={``}
                />
                <p className={`font-bold text-xs text-white`}>Adresse</p>
              </div>
              <div className={`flex flex-col gap-1`}>
                <p className={`font-bold text-xs text-white`}>
                  A108, rue Adams
                </p>
                <p className={`font-bold text-xs text-white`}>
                  Libreville, Gabon
                </p>
              </div>
            </div>
            <div
              className={`flex flex-col text-center items-center justify-center gap-3`}
            >
              <div>
                <p className={`font-bold text-xs text-white`}>Suivez nous</p>
              </div>
              <div className={`flex gap-2`}>
                <img
                  src="./assets/facebook.svg"
                  alt=""
                  width={25}
                  height={25}
                  className={``}
                />
                <img
                  src="./assets/link.svg"
                  alt=""
                  width={25}
                  height={25}
                  className={``}
                />
                <img
                  src="./assets/twiter.svg"
                  alt=""
                  width={25}
                  height={25}
                  className={``}
                />
                <img
                  src="./assets/instagram.svg"
                  alt=""
                  width={25}
                  height={25}
                  className={``}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    
  );
}
