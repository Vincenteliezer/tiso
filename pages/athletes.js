import React from "react";
import Image from "next/image";
import 'animate.css';
import Footer from "../components/Footer";
import FooterMedia from "../components/FooterMedia";
import NavBarTop from "../components/NavBarTop";
import authMar from "../public/images/authMar.jpg";
import ath1 from "../public/images/athletes/ath1.jpg";
import boen from "../public/images/athletes/boen.jpeg";
import boenAward from "../public/images/athletes/boenAward.jpg";
import friedn from "../public/images/athletes/friedn.jpg";
import TisoAthletes from "../public/images/athletes/TisoAthletes.jpg";


function athletes() {
  return (
    <div>
      <NavBarTop />
      <div className="h-[300px] relative">
        <Image
          src={authMar}
          className="mx-auto w-full h-[300px] object-cover brightness-50 absolute"
        />
        <h4 className="animate__animated animate__zoomIn absolute text-white text-3xl font-bold top-[100px] text-center w-full p-4">
          TISO ATHLETES
        </h4>
      </div>
      <main className="container mx-auto">
        <div className="animate__animated animate__zoomIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center mt-10 gap-6 p-2 md:p-0">
          <div className="relative">
            <Image
              src={ath1}
              alt=""
              className="relative h-[400px] w-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-3 bg-white mr-3 bg-opacity-50 p-2 rounded-xl">
              <h5 className="text-white text-lg font-semibold">
                Bartenge interviewed after the race
              </h5>
              <p className="text-xs">
                What an exciting moment for Transworld athlete getting press
                interview immediately after the race
              </p>
            </div>
            <p className="absolute right-4 top-3 bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018/09/26
            </p>
          </div>
          <div className="relative">
            <Image
              src={boen}
              alt=""
              className="relative h-[400px] w-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-3 bg-white mr-3 bg-opacity-50 p-2 rounded-xl">
              <h5 className="text-white text-lg font-semibold">
                Boen in Utah Valley
              </h5>
              <p className="text-xs">
                Stanley Boen winning Utah Valley Marathon
              </p>
            </div>
            <p className="absolute right-4 top-3 bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017/06/07
            </p>
          </div>
          <div className="relative">
            <Image
              src={boenAward}
              alt=""
              className="relative h-[400px] w-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-3 bg-white mr-3 bg-opacity-50 p-2 rounded-xl">
              <h5 className="text-white text-lg font-semibold">
                Boen Award Ceremony
              </h5>
              <p className="text-xs">
                Stanley Boen winning Kentucky Derby marathon
              </p>
            </div>
            <p className="absolute right-4 top-3 bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2017/06/07
            </p>
          </div>

          <div className="relative">
            <Image
              src={friedn}
              alt=""
              className="relative h-[400px] w-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-3 bg-white mr-3 bg-opacity-50 p-2 rounded-xl">
              <h5 className="text-white text-lg font-semibold">
                Silvester with his friend & Coach
              </h5>
              <p className="text-xs">
                Silvester with his friend and coach before the start of the race
              </p>
            </div>
            <p className="absolute right-4 top-3 bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018/09/26
            </p>
          </div>

          <div className="relative">
            <Image
              src={TisoAthletes}
              alt=""
              className="relative h-[400px] w-[400px] object-cover rounded-lg"
            />
            <div className="absolute bottom-5 left-3 bg-white mr-3 bg-opacity-50 p-2 rounded-xl">
              <h5 className="text-white text-lg font-semibold">
                TISO athletes and Manager
              </h5>
              <p className="text-xs">
                TISO Athlete with the Manager after the race
              </p>
            </div>
            <p className="absolute right-4 top-3 bg-yellow-500 bg-opacity-50 rounded-xl text-xs p-2">
              2018/09/26
            </p>
          </div>
        </div>
      </main>

      <div className="w-full bg-[#23282d] py-4 mt-10">
        <div className="container mx-auto">
          <Footer />
        </div>
        <div className="mt-4 border-b border-gray-500" />
        <div className="container mx-auto flex justify-between px-5 md:px-0 mt-2">
          <div className="text-sm text-gray-500">
            Copyright @2022 MadeBy V.E
          </div>
          <FooterMedia />
        </div>
      </div>
    </div>
  );
}

export default athletes;
