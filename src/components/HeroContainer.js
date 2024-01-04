import React, { useState } from 'react';
import hero from '../image/photos/bg-1.png';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const HeroContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="hero-bg-image h-[80vh] flex flex-col justify-center"
      >
        <div className="block h-[80vh] w-full opacity-70 transition duration-300 ease-in-out bg-overlay-bg absolute"></div>
        <div className="flex flex-col justify-between h-fit items-center p-14 z-50">
          <p className="text-secondary capitalize text-center  text-4xl md:text-5xl font-semibold leading-tight text-white">
            Revolutionize Education at your School with Rangeet
          </p>
          <h1 className="mt-20 md:mt-20 capitalize text-center md:text-start  text-2xl md:text-3xl font-semibold  leading-tight md:leading-snug  text-white">
            Improve Student Engagement with Play-Based Curriculum
          </h1>
          <p className="mt-8 md:mt-16 capitalize text-center md:text-start  text-sm md:text-xl font-semibold  leading-tight md:leading-snug  text-white">
            Shape the future with Rangeet
          </p>
          <div className="mt-4 md:mt-8 ml-4 bg-background py-2 px-4 rounded-2xl transition-all duration-500 font-semibold">
            <a
              href="https://play.google.com/store/apps/details?id=com.projectrangeet.app"
              target="_blank"
              className="text-white "
            >
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroContainer;
