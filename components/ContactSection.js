import React from "react";

function ContactSection() {
  return (
    <>
      <div className=" p-4 rounded-xl mt-5 border shadow text-gray-500">
        <h4 className="font-bold text-xl text-gray-500">OR</h4>
        <p>
          &#8594; Email through info@transworldsports.com if you would like to
          request general information
        </p>
        <p>
          &#8594; Email through manager@transworldsports.com if you would like
          to request general information
        </p>
        <h4 className="font-bold text-xl text-gray-500 mt-5">CALL US</h4>
        <p>
          &#8594; Should you want to reach our headquarter office call
          1-800-555-5555 <a href="tel:+18005555555" className="bg-yellow-500 px-4 rounded-full text-white ml-4 flex justify-end w-fit">Call</a>
        </p>
        <p>
          &#8594; Should you want to call our training camp located in Ngong
          area dial 254-722-22-22-22 <a href="tel:+254722222222" className="bg-yellow-500 px-4 rounded-full text-white ml-4 flex justify-end w-fit">Call</a>
        </p>
        <p>
          &#8594; Should you want to call our training camp located in Kapsabet
          area dial 254-722-22-22-22 <a href="tel:+254722222222" className="bg-yellow-500 px-4 rounded-full text-white ml-4 flex justify-end w-fit">Call</a>
        </p>
        <p>
          &#8594; Should you want to call our training camp located in Santa Fe
          area dial 1-505-555-5555 <a href="tel:+15055555555" className="bg-yellow-500 px-4 rounded-full text-white ml-4 flex justify-end w-fit">Call</a>
        </p>
      </div>
    </>
  );
}

export default ContactSection;
