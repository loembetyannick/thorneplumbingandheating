import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image'

const ImageCarousel = () => {
  return (
    <div className="mx-auto" style={{width:"500px"}}>
      <Carousel 
        showThumbs={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay
        showIndicators={false}
        >
        <div>
            <Image
                src="/plumbing-2.jpeg"
                alt="TPH Logo"
                width={50}
                height={100}
                style={{borderRadius:10}}
            />
        </div>
        <div>
            <Image
                src="/plumbing-2.jpeg"
                alt="TPH Logo"
                width={50}
                height={100}
                style={{borderRadius:10}}
            />
        </div>
        <div>
            <Image
                src="/plumbing-2.jpeg"
                alt="TPH Logo"
                width={50}
                height={100}
                style={{borderRadius:10}}
            />
        </div>
      </Carousel>
    </div>
  )
}

export default ImageCarousel