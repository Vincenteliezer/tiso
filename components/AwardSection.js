import React from "react";
import Image from "next/image";
import bronze from "../public/images/bronze.png";
import champions from "../public/images/champions.png";
import silverwinner from "../public/images/silverwinner.png";

function AwardSection() {
  return (
    <>
    <h4 className="mt-5 text-gray-800 font-bold text-xl text-center md:text-start md:ml-6">PERFORMANCE DASHBOARD</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 place-items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center text-center h-full">
          <Image src={champions} className="h-48 w-36" />
          <div>
            <p>Hellen Jepkurgat : LA Marathon</p>
            <p>Stanley Boen : St Louis Marathon</p>
            <p>Damiel Katitu : Glass City Marathon</p>
            <p>Stanley Boen : Kentucky Derby Marathon</p>
            <p>Evans Kurui : St Louis Marathon</p>
            <p>Dominic Korir : Mercedes Marathon</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center h-full">
          <Image src={silverwinner} className="h-48 w-36" />
          <div>
            <p>Stanley Boen : Glass City Marathon</p>
            <p>Paul Sugut : St Louis Marathon</p>
          </div>
          <div>

          </div>
        </div>
        <div className="flex flex-col items-center text-center h-full">
          <Image src={bronze} className="h-48 w-36" />
          <div>
            <p>Stanley Boen : Mercedes Marathon</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AwardSection;
