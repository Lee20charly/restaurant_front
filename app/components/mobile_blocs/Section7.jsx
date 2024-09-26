export function Section7() {
  return (
    <div className="flex flex-col">
      <section className={`flex flex-col md:m-auto md:items-center`}>
        <h1  className={`text-[rgb(232,49,49)] max-sm:ml-36 max-sm:mt-10 text-xl md:text-2xl md:text-black md:font-bold md:text-[45px]`}>Promotion</h1>
        <div className={`flex md:gap-12 lg:gap-14 gap-4 max-sm:ml-7 max-sm:mt-6 overflow-x-auto whitespace-nowrap items-center`}>
            {/* carousel1 */}
          <div className={`flex flex-col gap-3 items-center rounded-xl text-center w-[200px] md:w-[280px] lg:w-[340px] bg-gray-200`}>
            <div className="">
              <img
                src="../assets/bsect7-1.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[186px] h-[112px] md:w-[280px] lg:w-[340px]   md:h-[260px]`}
              />
            </div>
            <div>
              <h1 className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}>Plat du Jour à -50%</h1>
            </div>
            <div>
              <p className={`md:text-base text-sm  font-bold md:hidden`}>Profitez de notre plat du <br></br>
               jour à moitié prix tous les <br></br>
               lundis et mardis !</p>
              <p className={`md:text-base text-sm  font-bold max-sm:hidden`}>Profitez de notre plat du 
               jour à <br></br> moitié prix tous les
               lundis et <br></br> mardis !</p>
            </div>
            <div className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}>
              <button className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}>Réservez une table</button>
              <div></div>
            </div>
          </div>
            {/* carousel2 */}
          <div className={`flex flex-col gap-3 items-center rounded-xl text-center w-[200px] md:w-[280px] lg:w-[340px]   bg-gray-200`}>
            <div>
              <img
                src="../assets/bsect7-1.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[186px] h-[112px] md:w-[280px] lg:w-[340px]   md:h-[260px] `}
              />
            </div>
            <div>
              <h1 className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}>Plat du Jour à -50%</h1>
            </div>
            <div>
              <p className={`md:text-base text-sm  font-bold md:hidden`}>Profitez de notre plat du <br></br>
               jour à moitié prix tous les <br></br>
               lundis et mardis !</p>
              <p className={`md:text-base text-sm  font-bold max-sm:hidden`}>Profitez de notre plat du 
               jour à <br></br> moitié prix tous les
               lundis et <br></br> mardis !</p>
            </div>
            <div className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}>
              <button className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}>Réservez une table</button>
              <div></div>
            </div>
          </div>
            {/* carousel3 */}
          <div className={`flex flex-col gap-3 items-center text-center rounded-xl w-[200px] md:w-[280px] lg:w-[340px]   bg-gray-200`}>
            <div>
              <img
                src="../assets/bsect7-1.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[186px] h-[112px] md:w-[280px] lg:w-[340px]   md:h-[260px] `}
              />
            </div>
            <div>
              <h1 className={`text-[rgb(232,49,49)] md:text-2xl text-xl font-bold`}>Plat du Jour à -50%</h1>
            </div>
            <div>
              <p className={`md:text-base text-sm font-bold md:hidden`}>Profitez de notre plat du <br></br>
               jour à moitié prix tous les <br></br>
               lundis et mardis !</p>
              <p className={`md:text-base text-sm font-bold max-sm:hidden`}>Profitez de notre plat du 
               jour à <br></br> moitié prix tous les
               lundis et <br></br> mardis !</p>
            </div>
            <div className={`flex flex-col rounded-xl max-sm:gap-14 md:gap-12 lg:gap-14`}>
              <button className={`bg-[rgb(232,49,49)] text-base font-bold text-white rounded-md w-[153px] h-[37px] md:w-[166px] md:h-[37px] `}>Réservez une table</button>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
