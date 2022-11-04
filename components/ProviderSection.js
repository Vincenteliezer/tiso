import React from "react";
import Image from "next/image";
import bgProvider from "../public/images/bgProvider.jpg";

function ProviderSection() {
  return (
    <>
      <div className="relative mx-2 md:mx-0">
        <Image
          src={bgProvider}
          atl=""
          className="object-cover h-[300px] md:h-[500px] rounded-3xl brightness-50 relative"
        />
        <h3 className="absolute top-1/3  w-full text-center font-bold text-white text-2xl md:text-5xl p-4">
          Provider of Athletics Management
       
        </h3>
        <h3 className="text-sm mt-3 top-1/2 w-full text-center md:text-lg font-normal absolute   text-yellow-400 p-5">
          <button className="bg-yellow-500 px-4 py-3 rounded-lg text-white font-bold hover:bg-yellow-600 active:scale-75">JOIN US</button>
        </h3>
    
      </div>
    </>
  );
}

export default ProviderSection;
