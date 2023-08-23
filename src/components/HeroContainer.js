import React from 'react';
import ImageSlider from './ImageSlider';

const HeroContainer = () => {
  return (
    <div className="py-4 md:py-10 mx-0 lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-1/2 p-6 order-2 lg:order-1">
        <p className="font-semibold tracking-widest uppercase text-red-500 mb-2">
          Hair - Trasplant
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-128 font-montserrat">
          Our Hair Transplant Results are rated 4.8 on Google from 9000+ Reviews
        </h1>
        <p className="mt-4">Experience the Best Hair Transplant service at most AFFORDABLE COST</p>
        <a
          href="#know-more"
          className="bg-appointment-btn py-2 px-4 mt-8 rounded-sm text-white hover:bg-amber-900 transition-all duration-300 inline-block"
        >
          Know More
        </a>
      </div>

      {/* <!-- Right Box (Image) --> */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img
          src="https://img.freepik.com/premium-photo/head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become-shaggy-advertising-poster-hair-transplant-clinic-treatment-baldness_168410-1887.jpg?w=1060"
          alt="Image"
          className="w-full h-full"
        />
        {/* <ImageSlider
          oldImage='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp'
          newImage='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp'
        /> */}
      </div>
    </div>
  );
};

export default HeroContainer;
