import Image from "next/image";
import Link from "next/link";

export function Section3() {
  return (
    <div className={`w-full`}>
      <setion
        className={`w-full flex flex-col md:mt-6 max-sm:mt-2 bg-[rgb(231,217,217)]`}
      >
        <div className={`flex flex-col items-center md:mt-6  gap-4 m-auto`}>
          <div className={`flex flex-col md:gap-5 gap-2 max-sm:mt-7`}>
            <h1
              className={`font-bold text-2xl text-[rgb(232,49,49)] max-sm:hidden md:text-[38px] md:text-[rgb(0,0,0)]`}
            >
              Notre nouveau menu de l'été
            </h1>
            <h1
              className={`font-bold text-3xl text-[rgb(232,49,49)] md:text-[30px] md:hidden md:text-[rgb(0,0,0)]`}
            >
              Notre nouveau menu <br></br> de l'été
            </h1>
            <p className={`font-bold text-sm md:text-xl`}>
              Publié le 15 avril 2023 par Chef Pierre
            </p>
          </div>
          <div className={`flex flex-col items-center`}>
            <div className={`items-center flex flex-col gap-3`}>
              <img
                src="../assets/bsect3-1.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[359px] h-[205px] md:w-[830px] md:h-[480px] `}
              />
              <div className={`flex flex-col gap-6`}>
                <p className={`max-sm:hidden font-bold text-xl`}>
                  Chers amis gourmets, <br></br>
                  Le printemps est arrivé et avec lui, une explosion de saveurs
                  fraîches et délicates. Nous
                  <br></br> sommes ravis de vous présenter notre nouveau menu de
                  saison, mettant à l'honneur les <br></br> produits locaux et
                  de saison.
                </p>
                <p className={`md:hidden font-bold text-sm ml-3`}>
                  Chers amis gourmets, <br></br>
                  Le printemps est arrivé et avec lui, une explosion de saveurs<br></br>
                  fraîches et délicates. Nous sommes ravis de vous présenter<br></br> 
                  notre nouveau menu de saison, mettant à l'honneur
                  les <br></br> produits locaux et de saison.
                </p>
                <div className={`flex flex-col max-sm:ml-3 gap-4`}>
                  <div className={`flex gap-1 md:gap-2`}>
                    <img
                      src="../assets/bsect3-2.svg"
                      alt=""
                      // width={339}
                      // height={215}
                      className={`w-[20px] h-[20px] md:w-[23px] md:h-[23px] `}
                    />
                    <img
                      src="../assets/bsect3-2.svg"
                      alt=""
                      // width={339}
                      // height={215}
                      className={`w-[20px] h-[20px] md:w-[23px] md:h-[23px] `}
                    />
                    <img
                      src="../assets/bsect3-2.svg"
                      alt=""
                      // width={339}
                      // height={215}
                      className={`w-[20px] h-[20px] md:w-[23px] md:h-[23px] `}
                    />
                    <img
                      src="../assets/bsect3-2.svg"
                      alt=""
                      // width={339}
                      // height={215}
                      className={`w-[20px] h-[20px] md:w-[23px] md:h-[23px] `}
                    />
                    <img
                      src="../assets/bsect3-2.svg"
                      alt=""
                      // width={339}
                      // height={215}
                      className={`w-[20px] h-[20px] md:w-[23px] md:h-[23px] `}
                    />
                  </div>
                  <div className={`flex flex-col max-sm:gap-10`}>
                    <button
                      className={`w-[100px] h-[30px] max-sm:text-base md:w-[141px] md:h-[57px] rounded-md md:text-2xl font-bold text-white bg-[rgb(232,49,49)]`}
                    >
                      <Link href="#"></Link> Lire plus
                    </button>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </setion>
    </div>
  );
}
