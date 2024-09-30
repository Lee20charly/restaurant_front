import Image from "next/image";

export function Section1() {
  return (
    <div className={`w-full flex flex-col items-center md:gap-8 max-sm:bg-[rgb(231,217,217)] max-sm:mt-2`}>
      <div></div>
      <section className="flex gap-10 m-auto flex-col md:bg-transparent">
        <div className={` flex flex-col gap-3 md:gap-8 items-center max-sm:mt-8`}>
          <h1 className={`font-bold text-2xl md:text-[44px]`}>Blog culinaire qui fait voyager</h1>
          <p className={`font-bold text-base md:hidden`}>
            Un voyage gastronomique à <br></br> chaque bouchée
          </p>
          <p className={`font-bold text-lg max-sm:hidden`}>
            Un voyage gastronomique à chaque bouchée
          </p>
        </div>
        <div className={`gap-14 text-center items-center md:flex`}>
          <div className={``}>
            <img
              src="../assets/bsect1-1.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[339px] h-[215px] md:w-[710px] md:h-[510px] `}
            />
          </div>
          <div className={`gap-8 max-sm:mt-7 flex flex-col items-center`}>
            <img
              src="../assets/bsect1-2.svg"
              alt=""
              // width={280}
              // height={224}
              className={` w-[280px] h-[224px] md:w-[355px] md:h-[282px]`}
            />
            <div className={`md:w-full md:h-full justify-center w-[310px] h-[67px] items-center flex max-sm:bg-[rgb(217,217,217)] md:bg-[rgb(231,217,217)]`}>
              <p className={`font-bold text-xs md:text-lg`}>
                Le bouillon de carpe est un plat emblématique de la <br></br>
                cuisine gabonaise, apprécié pour sa saveur riche et
                <br></br>
                ses ingrédients frais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
