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
        <div className="flex flex-col justify-between h-fit items-center p-14">
          <p className="text-secondary capitalize text-center font-poppins text-5xl font-semibold leading-tight">
            Revolutionize Education at your School with Rangeet{' '}
          </p>
          <h1 className="mt-20 capitalize text-center md:text-start font-poppins text-2xl font-semibold  leading-tight md:leading-snug  text-black">
            Improve Student Engagement with Play Based Curriculum
          </h1>
          <p className="mt-16 capitalize text-center md:text-start font-poppins text-2xl font-semibold  leading-tight md:leading-snug  text-blackm">
            Shape the future with RANGEET
          </p>
          <div className="mt-8 ml-4 bg-secondry py-2 px-4 rounded-sm transition-all duration-500 font-semibold">
            <a href="tel:+919152128731" className="text-white ">
              Learn More
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HeroContainer;
