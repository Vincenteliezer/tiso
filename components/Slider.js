import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import Image from "next/image";
import bg1 from "../public/images/bg1.jpg";
import bg2 from "../public/images/bg2.jpg";
import bg3 from "../public/images/bg3.jpg";
import bg4 from "../public/images/bg4.jpg";
import bg5 from "../public/images/bg5.jpg";

function Slider() {
  return (
    <div className="">
      <Carousel
        wrapAround={true}
        autoplay={true}
        className="overflow-hidden w-full object-cover h-[500px]"
      >
        <Image
          src={bg1}
          alt="slider image"
          priority
          className="object-cover w-full h-[500px]"
        />
        <Image
          src={bg2}
          alt="slider image"
          className="w-full object-cover h-[500px]"
          priority
        />
        <Image
          src={bg3}
          alt="slider image"
          className="w-full object-cover h-[500px]"
          priority
        />
        <Image
          src={bg4}
          alt="slider image"
          className="w-full object-cover h-[500px]"
          priority
        />
        <Image
          src={bg5}
          alt="slider image"
          className="w-full  object-cover h-[500px]"
          priority
        />
      </Carousel>
    </div>
  );
}

export default Slider;
