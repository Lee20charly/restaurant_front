import Image from "next/image";
import { Header } from "../components/Header";

import { App } from "antd";

export default function page() {
  return (
    <div>
      <Header />
      <main className="h-screen bg-white flex justify-around items-center gap-6">
        <div className="h-3/4 w-6/12 flex justify-center items-center  bg-white">
          <div className=" h-5/6 w-4/5 flex-col justify-center  items-center bg-slate-500">
            <input
              className="h-10 w-5/6 ml-14 mt-3 pl-5 bg-gray"
              type="text"
              placeholder="Nom..."
            />
            <input
              className="h-10 w-5/6 ml-14 mt-3 pl-5 bg-gray"
              type="text"
              placeholder="E-mail..."
            />
            <input
              className="h-80 w-5/6 bg-gray ml-14 mt-5"
              type="text"
              placeholder="Message..."
            />
            <button className="w-32 h-10 mt-2 ml-8 bg-red-600 text-white text-center rounded-full hover:bg-blue-600 transition-colors">
              Envoyer
            </button>
          </div>
        </div>
        <div className="h-3/4 w-6/12 bg-white">
          <div className="h-48 bg-white flex justify-around items-center">
            <div className="h-32 w-60 bg-white flex-col">
              <Image
                src="/assets/email.jpg"
                className="ml-16 mt-2"
                width={90}
                height={90}
                alt="image"
              />
              <p className="text-center mt-1">lbv@exemple.com</p>
            </div>
            <div className="h-32 w-60 bg-white">
              <Image
                src="/assets/line-md_phone-call-loop.jpg"
                className="ml-16 mt-2"
                width={90}
                height={90}
                alt="image"
              />
              <p className="text-center mt-1">074 xx xx xx</p>
            </div>
            <div className="h-32 w-60 bg-white">
              <Image
                src="/assets/gis_position-o.jpg"
                className="ml-16 mt-2"
                width={90}
                height={90}
                alt="image"
              />
              <p className="text-center mt-1">Libreville, Gabon</p>
            </div>
          </div>
          <Image
            className="mt-2 ml-28 "
            src="/assets/maps.jpg"
            width={600}
            height={600}
            alt="maps"
          />
        </div>
      </main>
      <footer className="h-96 bg-black flex-col justify-center items-center pt-5">
        <div className="h-52 w-5/6 ml-32  bg-yellow-300"></div>
        <div className="h-24 w-56 bg-blue-600 mt-9  ml-auto"></div>
      </footer>
    </div>
  );
}
