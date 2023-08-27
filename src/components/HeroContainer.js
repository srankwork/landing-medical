import React from 'react';
import ImageSlider from './ImageSlider';
const HeroContainer = () => {
  const handleScrollClick = () => {
    const container = document.getElementById('appointmentForm');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=" bg-background lg:flex lg:justify-around lg:items-center">
      <div className="lg:w-1/2 p-4 order-2 lg:order-1">
        <p className="font-poppins text-base md:text-base font-semibold leading-6 tracking-wider uppercase text-primary mb-2">
          Hair - Trasplant
        </p>
        <h1 className="mt-1 font-poppins text-4xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
          Get the hair you've always dreamed of!
        </h1>
        <p className="mt-3 text-lightblue font-poppins text-base md:text-xl  leading-snug font-medium">
          Lastest Hair Transplant Techniques at Novacutis Clinic
        </p>
        <button
          onClick={handleScrollClick}
          className="mt-8 flex items-center border-2 border-primary text-primary bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm"
        >
          Schedule Appointment
        </button>
      </div>

      <div className="hidden md:flex  order-1 lg:order-2">
        <ImageSlider
          oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
          newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
        />
      </div>
    </div>
  );
};

export default HeroContainer;
