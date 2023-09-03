import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import AppoitmentModal from './AppointmentModal';
import after2 from '../image/hair-transplate/photos/b&a1.2.jpg';
import before2 from '../image/hair-transplate/photos/b&a1.1.jpg';

const HeroContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleScrollClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <div className="bg-background lg:flex lg:justify-around lg:items-center hero-bg-image md:bg-none relative pb-12 md:pb-0">
        <div className="block md:hidden h-full w-full opacity-40 transition duration-300 ease-in-out bg-overlay-bg absolute"></div>
        <div className="lg:w-1/2 p-4 order-2 lg:order-1 relative">
          <p className="mt-6 md:mt-0 font-poppins text-base  md:text-base font-semibold leading-6 tracking-wider uppercase text-white md:text-primary text-center md:text-start mb-2">
            Is hair loss making you pull your hair out?
          </p>
          <h1 className="mt-16 md:mt-6 capitalize text-center md:text-start font-poppins text-4xl md:text-5xl font-semibold  leading-tight md:leading-snug  text-white md:text-header">
            Get the hair you've always dreamed of!
          </h1>
          <p className="mt-16 md:mt-12 text-center md:text-start text-white md:text-lightblue font-poppins text-base md:text-xl  leading-snug font-medium">
            Lastest Hair Transplant Techniques at Novacutis Clinic
          </p>
          <button
            onClick={handleScrollClick}
            className="m-auto md:m-0 mt-20 md:mt-6 flex items-center md:border-2 md:border-primary text-white md:text-primary bg-primary md:bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm"
          >
            Schedule Appointment
          </button>
        </div>

        <div className="hidden md:flex  order-1 lg:order-2">
          <ImageSlider
            oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
            newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
          />
          {/* <ImageSlider oldImage={before2} newImage={after2} /> */}
        </div>
      </div>
      <AppoitmentModal show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default HeroContainer;
