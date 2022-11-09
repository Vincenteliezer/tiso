import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import FooterMedia from "../components/FooterMedia";
import tisoBanner3 from "../public/images/tisoBanner3.jpg";
import aboutProf from "../public/images/aboutProf.jpg";

function about() {
  return (
    <>
      <main>
        <NavBarTop />
        <div className="h-[300px] relative">
          <Image
            src={tisoBanner3}
            className="mx-auto w-full h-[300px] object-cover brightness-50 absolute"
          />
          <h4 className="absolute text-white text-xl top-[100px] text-center w-full p-4">
            "Our future welfare and prosperity depends on our dedicated and
            talented athletes who join our team. We work as a team and at the
            end everyone is a winner."
          </h4>
        </div>
        <div className="max-w-7xl mx-auto my-10">
          <h4 className="font-bold text-2xl text-gray-800 text-center md:text-start bg-gray-100 p-3 rounded-lg">
            ABOUT US
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mx-4 mt-4 content-start">
            <div className="text-center h-full ">
              <Image src={aboutProf} className="h-72 w-72 rounded-lg" />
              <div className="mt-3">
                <h4 className="font-bold text-xl text-gray-700">
                  FANUEL MOKAMBA
                </h4>
                <h6 className="text-base text-gray-500">
                  President & CEO TISO
                </h6>
              </div>
            </div>
            <div className="h-full">
              <h5 className="text-normal text-gray-600 mt-4 md:mt-0 text-justify">
                TransWorld Internation Sports Organization(TISO) was founded in
                2013 as a sport organization that is geared towards
                nurturing,promoting and managing athlete's talent. It is a
                registered organization that manages professional athletes of
                any nationality.
              </h5>
              <div>
                <h5 className="text-2xl font-bold mt-4 text-gray-800 text-center md:text-start">
                  WHERE WE OPERATE
                </h5>
                <ul className="space-y-3 text-gray-600 mt-3">
                  <li>&#10004; TISO headquartered in Grand Prairie, Texas</li>
                  <li>&#10004; TISO Training camp in Santa Fe, New Mexico</li>
                  <li>&#10004; TISO Training Base Camp in Kapsabet Kenya</li>
                  <li>&#10004; TISO Training Base Camp in Ngong Kenya</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="w-full bg-[#23282d] py-4 ">
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
    </>
  );
}

export default about;
