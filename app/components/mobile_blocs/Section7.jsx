export function Section7() {
  return (
    <div className="flex flex-col">
      <section className={`flex flex-col md:m-auto md:items-center`}>
        <h1
          className={`text-[rgb(232,49,49)] max-sm:m-auto max-sm:mt-8 text-xl md:mt-8 md:text-2xl md:text-black md:font-bold md:text-[45px]`}
        >
          Promotion
        </h1>
        <div
          className={`flex md:gap-4 lg:gap-14 gap-4 max-sm:ml-7 md:mt-10 md:mb-14 max-sm:mb-5 max-sm:mt-4 overflow-x-auto whitespace-nowrap items-center`}
        >
          {/* carousel1 */}
          {/* début */}
          <div className="flex max-sm:hidden md:flex-col items-center gap-4 lg:hidden">
            <div className="flex gap-8">
              <div
                className={`flex flex-col gap-3 items-center rounded-xl text-center w-[200px] md:w-[340px] lg:w-[340px] bg-gray-200`}
              >
                <div className="">
                  <img
                    src="../assets/bsect7-1.svg"
                    alt=""
                    // width={339}
                    // height={215}
                    className={`w-[186px] h-[112px] md:w-[340px] lg:w-[340px]   md:h-[260px]`}
                  />
                </div>
                <div>
                  <h1
                    className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}
                  >
                    Plat du Jour à -50%
                  </h1>
                </div>
                <div>
                  <p className={`md:text-base text-sm  font-bold md:hidden`}>
                    Profitez de notre plat du <br></br>
                    jour à moitié prix tous les <br></br>
                    lundis et mardis !
                  </p>
                  <p
                    className={`md:text-base text-sm  font-bold max-sm:hidden`}
                  >
                    Profitez de notre plat du jour à <br></br> moitié prix tous
                    les lundis et <br></br> mardis !
                  </p>
                </div>
                <div
                  className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}
                >
                  <button
                    className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}
                  >
                    Réservez une table
                  </button>
                  <div></div>
                </div>
              </div>
              {/* carousel2 */}
              <div
                className={`flex flex-col gap-3 items-center rounded-xl text-center w-[200px] md:w-[340px] lg:w-[340px]   bg-gray-200`}
              >
                <div>
                  <img
                    src="../assets/bsect7-2.svg"
                    alt=""
                    // width={339}
                    // height={215}
                    className={`w-[186px] h-[112px] md:w-[340px] lg:w-[340px]   md:h-[260px] `}
                  />
                </div>
                <div>
                  <h1
                    className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}
                  >
                    Offre de Groupe
                  </h1>
                </div>
                <div>
                  <p className={`md:text-base text-sm  font-bold md:hidden`}>
                  10%de réduction pour les <br></br> groupes de 6 personnes <br></br> ou plus !
                  </p>
                  <p
                    className={`md:text-base text-sm  font-bold max-sm:hidden`}
                  >
                     10%de réduction pour les groupes <br></br> de 6 personnes ou plus !
                  </p>
                </div>
                <div
                  className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}
                >
                  <button
                    className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}
                  >
                    Réservez une table
                  </button>
                  <div></div>
                </div>
              </div>
            </div>
            <div
              className={`flex flex-col gap-3 items-center text-center rounded-xl w-[200px] md:w-[340px] lg:w-[340px]   bg-gray-200`}
            >
              <div>
                <img
                  src="../assets/bsect7-3.svg"
                  alt=""
                  // width={339}
                  // height={215}
                  className={`w-[186px] h-[112px] md:w-[340px] lg:w-[340px]   md:h-[260px] `}
                />
              </div>
              <div>
                <h1
                  className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}
                >
                  Happy Hour 
                </h1>
              </div>
              <div>
                <p className={`md:text-base text-sm font-bold md:hidden`}>
                 Cocktails à moitié prix <br></br> de 17h à 19h du lundi <br></br> au vendredi !
                </p>
                <p className={`md:text-base text-sm font-bold max-sm:hidden`}>
                Cocktails à moitié prix de 17h à <br></br> 19h du lundi au vendredi !
                </p>
              </div>
              <div
                className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}
              >
                <button
                  className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}
                >
                  Réservez une table
                </button>
                <div></div>
              </div>
            </div>
          </div>
          {/* fini */}
          <div
            className={`flex flex-col gap-3 items-center rounded-xl text-center md:hidden lg:flex w-[200px] md:w-[340px] lg:w-[340px] bg-gray-200`}
          >
            <div className="">
              <img
                src="../assets/bsect7-1.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[186px] h-[112px] md:w-[340px] lg:w-[340px]   md:h-[260px]`}
              />
            </div>
            <div>
              <h1
                className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}
              >
                Plat du Jour à -50%
              </h1>
            </div>
            <div>
              <p className={`md:text-base text-sm  font-bold md:hidden`}>
                Profitez de notre plat du <br></br>
                jour à moitié prix tous les <br></br>
                lundis et mardis !
              </p>
              <p className={`md:text-base text-sm  font-bold max-sm:hidden`}>
                Profitez de notre plat du jour à <br></br> moitié prix tous les
                lundis et <br></br> mardis !
              </p>
            </div>
            <div
              className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}
            >
              <button
                className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}
              >
                Réservez une table
              </button>
              <div></div>
            </div>
          </div>
          {/* carousel2 */}
          <div
            className={`flex flex-col gap-3 items-center rounded-xl text-center md:hidden lg:flex w-[200px] md:w-[340px] lg:w-[340px]   bg-gray-200`}
          >
            <div>
              <img
                src="../assets/bsect7-2.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[186px] h-[112px] md:w-[340px] lg:w-[340px]   md:h-[260px] `}
              />
            </div>
            <div>
              <h1
                className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}
              >
                Offre de Groupe
              </h1>
            </div>
            <div>
              <p className={`md:text-base text-sm  font-bold md:hidden`}>
              10%de réduction pour les <br></br> groupes de 6 personnes <br></br> ou plus !
              </p>
              <p className={`md:text-base text-sm  font-bold max-sm:hidden`}>
              10%de réduction pour les groupes <br></br> de 6 personnes ou <br></br> plus !
              </p>
            </div>
            <div
              className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}
            >
              <button
                className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}
              >
                Réservez une table
              </button>
              <div></div>
            </div>
          </div>
          {/* carousel3 */}
          <div
            className={`flex flex-col gap-3 items-center text-center md:hidden lg:flex rounded-xl w-[200px] md:w-[340px] lg:w-[340px]   bg-gray-200`}
          >
            <div>
              <img
                src="../assets/bsect7-3.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[186px] h-[112px] md:w-[340px] lg:w-[340px]   md:h-[260px] `}
              />
            </div>
            <div>
              <h1
                className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}
              >
                Happy Hour
              </h1>
            </div>
            <div>
              <p className={`md:text-base text-sm font-bold md:hidden`}>
              Cocktails à moitié prix de <br></br> 17h à  19h du lundi <br></br> au vendredi !
              </p>
              <p className={`md:text-base text-sm font-bold max-sm:hidden`}>
              Cocktails à moitié prix de 17h à <br></br> 19h du lundi au vendredi !
              </p>
            </div>
            <div
              className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}
            >
              <button
                className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}
              >
                Réservez une table
              </button>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
