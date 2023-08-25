import React from 'react';
import ImageSlider from './ImageSlider';

const HeroContainer = () => {
  return (
    <div className=" bg-background my-4 md:my-10 lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-1/2 p-6 order-2 lg:order-1">
        <p className="font-poppins text-base md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary mb-2">
          Hair - Trasplant
        </p>
        <h1 className="mt-2 font-poppins text-4xl md:text-6xl font-semibold leading-tight tracking-tighter text-header">
          Our Hair Transplant
          <br />
          Results
        </h1>
        <p className="mt-2 md:mt-4 text-lightblue font-poppins text-base md:text-xl font-medium leading-snug">
          Our Hair Transplant Results are rated 4.8 on Google from 9000+
          Reviews Experience the Best Hair Transplant service at most
          AFFORDABLE COST
        </p>
        <button class="mt-8 md:mt-11 border-2 border-primary text-primary bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm">
          KNOW MORE
        </button>
      </div>

      <div className="hidden md:block lg:w-1/2 order-1 lg:order-2">
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
