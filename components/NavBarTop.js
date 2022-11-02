import React from "react";
import Image from "next/image";
import tisologo3 from "../public/images/tisologo3.png";

function NavBarTop() {
  return (
    <>
      <nav className="w-full bg-[#509eb9]">
        <div className="flex items-center justify-between px-3 md:px-0 py-3 max-w-7xl mx-auto">
          {/* LOGO  */}
          <Image src={tisologo3} height={30} width={30} />
          {/* NAME  */}
          <h1 className="text-white md:text-2xl">
            Transworld International Sports Organization
          </h1>
        </div>
      </nav>
      <div className="bg-white p-6 shadow w-full  ">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div className="">
            <ul className="flex space-x-4">
              <li>Home</li>
              <li>Progress</li>
              <li>Athletes</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>Contact</li>
              <li>Join</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarTop;
