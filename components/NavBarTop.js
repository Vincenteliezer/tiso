import React from "react";
import Image from "next/image";
import tisologo3 from "../public/images/tisologo3.png";
import OffCanvas from "./OffCanvas";

function NavBarTop() {
  return (
    <>
      <nav className="w-full bg-[#509eb9]">
        <div className="flex items-center justify-between px-3 md:px-0 py-3 max-w-7xl mx-auto">
          {/* LOGO  */}
          <div className="flex items-center space-x-2">
            <Image src={tisologo3} alt="tiso logo"  height={70} width={70} />
            <div>
              <h1 className="text-4xl font-bold text-yellow-400 shadow-xl w-fit px-4 py-1 bg-white rounded-full">TISO</h1>
              <h6 className="text-xs text-white md:hidden">Transworld International Sports Organization</h6>
            </div>
          </div>

          {/* NAME  */}
          <h1 className="text-white hidden md:text-4xl font-bold md:flex">
            Transworld International Sports Organization
          </h1>
        </div>
      </nav>
      <div className="bg-[#23282d] px-2 shadow w-full sticky top-0 z-50">
        
        <div className="flex  py-2 md:py-0 md:h-20 items-center max-w-7xl mx-auto">
        <OffCanvas />
          <div className="hidden md:flex">
            <ul className="flex space-x-4 text-xs text-yellow-400 md:text-lg ">
              <li className="cursor-pointer active:scale-95 hover:text-white hover:border-b">Home</li>
              <li className="cursor-pointer active:scale-95 hover:text-white hover:border-b">Progress</li>
              <li className="cursor-pointer active:scale-95 hover:text-white hover:border-b">Athletes</li>
              <li className="cursor-pointer active:scale-95 hover:text-white hover:border-b">About</li>
              <li className="cursor-pointer active:scale-95 hover:text-white hover:border-b">Contact</li>
              <li className="cursor-pointer active:scale-95 hover:text-white hover:border-b">Join</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarTop;
