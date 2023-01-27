import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 opacity-25" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className=" w-full h-full">
          <img
            loading="lazy"
            src="/assets/carousel-1.png"
            // className="w-full h-full max-h-screen "
          />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img
            src="/assets/carousel-1.png"
            // className="w-full h-full max-h-screen "
          />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img
            src="/assets/carousel-1.png"
            // className="w-full h-full max-h-screen "
          />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
