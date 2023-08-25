import React, { useEffect } from 'react';
// import ImageSlider from './ImageSlider';

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ResultContainer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="mt-10 md:mt-20"
    >
      <p className="font-poppins text-sm md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        What Clients say
      </p>
      <h1 className="mt-3 font-poppins text-2xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        Result that's show our value
      </h1>
      <div className=" mt-8 flex items-center justify-center">
        <img src="https://img.freepik.com/premium-photo/head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become-shaggy-advertising-poster-hair-transplant-clinic-treatment-baldness_168410-1887.jpg" />
      </div>

      <div className="mt-12 w-full md:w-3/4 m-auto">
        <div className=""></div>
        {/* <ImageSlider
          oldImage='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp'
          newImage='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp'
        /> */}
      </div>
    </motion.div>
  );
};

export default ResultContainer;
