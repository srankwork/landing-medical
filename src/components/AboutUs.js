import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="mt-14 md:mt-28 bg-background pt-12 pb-12"
    >
      <h1 className="mt-3 font-poppins text-4xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        About Us
      </h1>
      <div className="mt-12 flex items-center justify-center">
        <img
          src="https://www.novacutisclinics.com/assets/images/logo.png"
          className=" h-32 md:h-60"
          alt="logo"
          width="auto"
          height="auto"
        />
      </div>
      <div className="flex justify-center items-center">
        <p className="px-4 md:w-3/4 text-center mt-4 md:mt-10 font-normal md:tracking-wide text-sm md:text-lg text-header">
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
