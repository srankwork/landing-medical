import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import video from '../image/hair-transplate/photos/about_us.mp4';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.5 }}
      className="mt-14 md:mt-28 bg-background pt-8 md:pt-16 pb-16"
    >
      <h1 className="mt-3 font-poppins text-4xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        About Us
      </h1>
      <div className="mt-8 md:mt-12 flex items-center justify-center">
        <video controls className="rounded-sm">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center items-center">
        <p className="px-4 md:w-3/4 text-center mt-8 md:mt-10 font-normal md:tracking-wide text-sm md:text-lg text-header">
          Dr. Prachi Patel's Novacutis Skin, Hair Transplant & Cosmetic Clinic
          is an advanced medical facility equipped with international US
          FDA-approved machines, located in the heart of Mumbai providing a wide
          range of dermatological & aesthetic solutions.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
