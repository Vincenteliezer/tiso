import React from "react";
import Footer from "../components/Footer";
import NavBarTop from "../components/NavBarTop";
import FooterMedia from "../components/FooterMedia";
import Image from "next/image";
import gallery2 from "../public/images/gallery2.jpg";

function contact() {
  return (
    <>
      <NavBarTop />
      <div className="max-w-7xl mx-auto">
        <h4 className="text-2xl font-bold text-gray-700 my-10 text-center">
          CONTACT
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl p-2">
          <div>
            <Image
              src={gallery2}
              alt=""
              className="h-[400px] object-cover rounded-xl w-full"
            />
          </div>
          <div className="p-4">
            <form action="" className=" w-full h-full">
              <h4 className="text-xl font-bold text-gray-700">WRITE US A MEASSAGE</h4>
              <div className="mt-6">
                <label htmlFor="text" className="text-sm">Enter your Fullnames*</label>
                <input
                  type="text"
                  htmlFor="text"
                  placeholder="Enter your fullname"
                  className="h-12 px-4 focus:outline-0 bg-slate-100 w-full mt-1 text-base text-gray-700"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="email" className="text-sm">Enter your Email*</label>
                <input
                  type="email"
                  htmlFor="email"
                  placeholder="Enter your email"
                  className="h-12  px-4 focus:outline-0 mt-1 bg-slate-100 w-full text-base text-gray-700"
                />
              </div>
              <textarea name="comment" id="" cols="30" rows="10" placeholder="Write a message" className="text-gray-700 w-full mt-4 h-12  px-4 focus:outline-0 bg-slate-100 p-2"></textarea>
              <button type="submit" className="mt-5 bg-yellow-500 px-4 py-2 rounded-md text-white active:scale-75">SEND</button>
            </form>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default contact;
