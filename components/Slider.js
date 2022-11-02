import React from 'react'
import Carousel from 'nuka-carousel/lib/carousel'
import Image from 'next/image'
import bg1 from '../public/images/bg1.jpg'
import bg2 from '../public/images/bg2.jpg'
import bg3 from '../public/images/bg3.jpg'
import bg4 from '../public/images/bg4.jpg'
import bg5 from '../public/images/bg5.jpg'


function Slider() {
  return (
    <div className="mt-4">
        <Carousel wrapAround={true} autoplay={true}>
        <Image src={bg1}  />
        <Image src={bg2}  />
        <Image src={bg3}  />
        <Image src={bg4}  />
        <Image src={bg5}  />
      </Carousel>
    </div>
  )
}

export default Slider