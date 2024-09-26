import Image from "next/image";

export function Section2() {
  return (
    <div className={`w-full`}>
      <section className={`flex flex-col max-sm:mt-2 md:bg-[rgb(231,217,217)] max-sm:bg-[rgb(231,217,217)]`} >
        <div className={`flex m-auto max-sm:mt-6 md:gap-10 items-center`}>
          <div className={`flex flex-col`}>
            <div className={`md:flex gap-[187px] md:mt-6 items-center`}>
              <div className={`flex gap-4 ml-1 md:gap-6`}>
                <img
                  src="../assets/bsect2-1.svg"
                  alt=""
                  // width={339}
                  // height={215}
                  className={`w-[167px] h-[193px] md:w-[266px] md:h-[299px] `}
                />
                <img
                  src="../assets/bsect2-2.svg"
                  alt=""
                  // width={339}
                  // height={215}
                  className={`w-[128px] mt-12 md:mt-[143px] h-[139px] md:w-[150px] md:h-[150px] `}
                />
              </div>
              <div className={`flex flex-col items-center gap-8`}>
                <h1 className={`font-bold text-[35px] max-lg:hidden max-sm:hidden`}>
                  Bienvenue sur notre <br></br> blog
                </h1>
                <p className={`font-bold text-[25px] max-lg:hidden  max-sm:hidden`}>
                  Découvrez nos créations <br></br> culinaires
                </p>
              </div>
            </div>
            <div className={`md:flex gap-14`}>
              <div className={`flex gap-6 md:gap-10 ml-10 md:ml-16 md:mb-5`}>
                <img
                  src="../assets/bsect2-3.svg"
                  alt=""
                  // width={339}
                  // height={215}
                  className={`w-[128px] h-[135px] md:w-[200px] md:h-[200px] `}
                />
                <img
                  src="../assets/bsect2-4.svg"
                  alt=""
                  // width={339}
                  // height={215}
                  className={`w-[144px] h-[176px] md:w-[266px] md:h-[299px] `}
                />
              </div>
              <div className={`flex flex-col items-center`}>
                <p className={`font-bold text-base md:mt-4 max-lg:hidden  max-sm:hidden`}>
                  Moderne comme traditionnelle, nous nous <br></br>
                  assurons de vous offrir le meilleur pour votre <br></br>
                  estomac dans la joie et la convivialité chez <br></br>
                  nous
                </p>
                <p className={`font-bold text-xs max-sm:mb- max-sm:mt-2 max-sm:mb-6 md:hidden max-lg:block`}>
                  Moderne comme traditionnelle, nous nous assurons de <br></br>
                  vous offrir le meilleur pour votre estomac dans la joie et la
                  <br></br> convivialité chez nous
                </p>
                <p className={`font-bold text-xs max-sm:mb- max-sm:mt-2 md:hidden max-sm:hidden`}>
                  Moderne comme traditionnelle, nous nous assurons de <br></br>
                  vous offrir le meilleur pour votre estomac dans la joie et la
                  <br></br> convivialité chez nous
                </p>
              </div>
            </div>
          </div>
          {/* <div className={`flex flex-col items-center gap-8`}>
          </div> */}
        </div>
      </section>
    </div>
  );
}
