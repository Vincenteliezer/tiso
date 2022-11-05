import React from "react";
import Image from "next/image";
import tisologo3 from "../public/images/tisologo3.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-5 md:p-0 md:pt-8">
        <div>
          <div className="">
            <h3 className="text-2xl font-bold mb-3 text-yellow-500">TISO</h3>
            <Image src={tisologo3} alt="tiso logo" height={50} width={50} />
          </div>
          <p className="text-sm text-gray-300 mt-4 text-justify">
            TransWorld International Sports Organization(TISO) was founded in
            2013 as a sport organization that is geared towards nurturing,
            promoting and managing athlete's talent. It is a registered
            organization that manages professional athletes of any nationality.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-yellow-500">
            QUICK LINKS
          </h3>

          <ul className="space-y-2 mt-3 text-gray-300">
            <Link href="/">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75">
                Home
              </li>
            </Link>

            <li className="hover:text-yellow-400 cursor-pointer active:scale-75">
              Progress
            </li>
            <li className="hover:text-yellow-400 cursor-pointer active:scale-75">
              Athletes
            </li>
            <Link href="/about">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-yellow-500">MEMBER</h3>
          <ul className="mt-3 text-gray-300">
            <Link href="/" className="my-2">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75">
                USA Track and Field
              </li>
            </Link>
            <Link href="http://www.athleticskenya.or.ke/">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75 my-2">
                Athletics Kenya
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 text-yellow-500">IAAF</h3>

          <ul className="space-y-2 mt-3 text-gray-300">
            <Link href="https://www.iaaf.org/about-iaaf/documents/rules-regulations">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75 my-2">
                Comply with IAAF Rules
              </li>
            </Link>
            <Link href="https://www.iaaf.org/about-iaaf/documents/anti-doping">
              <li className="hover:text-yellow-400 cursor-pointer active:scale-75 my-2">
                Comply with Anti-Doping Rules
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
