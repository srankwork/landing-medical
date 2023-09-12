import React, { useState } from 'react';
import AppoitmentModal from './AppointmentModal';
import hero from '../image/hair-transplate/photos/hero.jpg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const HeroContainer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleScrollClick = () => {
    setShowPopup(true);
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="bg-background lg:flex lg:justify-around lg:items-center hero-bg-image md:bg-none relative pb-12 md:pb-0 "
      >
        <div className="block md:hidden h-full w-full opacity-50 transition duration-300 ease-in-out bg-overlay-bg absolute"></div>
        <div className="lg:w-1/2 p-8 order-2 lg:order-1 relative flex flex-col justify-between h-fit ">
          <p className="mt-8 md:mt-0 font-poppins text-base  md:text-base font-semibold leading-6 tracking-wider uppercase text-white md:text-primary text-center md:text-start mb-2">
            Fine lines and wrinkles making you conscious of your age and
            appearance?
          </p>
          <h1 className="mt-20 md:mt-6 capitalize text-center md:text-start font-poppins text-4xl md:text-5xl font-semibold  leading-tight md:leading-snug  text-white md:text-header">
            Feel confident and look youthful with state-of-the-art cosmetic
            injectables.
          </h1>
          <p className="mt-20 md:mt-12 text-center md:text-start text-white md:text-lightblue font-poppins text-base md:text-xl  leading-snug font-medium">
            Turn back time to the good old days with Novacutis Clinic
          </p>
          <button
            onClick={handleScrollClick}
            className="w-max m-auto md:m-0 mt-6 md:mt-4 flex items-center md:border-2 md:border-primary text-white md:text-primary bg-primary md:bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm"
          >
            Book Appointment
          </button>
        </div>

        <div className="hidden md:flex  order-1 lg:order-2 h-max w-1/2">
          <img src={hero} alt="hero image" className="h-full w-full" />
        </div>
      </motion.div>
      <AppoitmentModal show={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default HeroContainer;
