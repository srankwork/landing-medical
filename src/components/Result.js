import React from 'react';
import ImageSlider from './ImageSlider';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ResultContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="mt-10 md:mt-20"
    >
      <p className="font-poppins text-sm md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        What Clients say
      </p>
      <h1 className="mt-4 font-poppins text-2xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        Result that's show our value
      </h1>
      <div className="mt-12 md:flex px-4 justify-around">
        <div>
          <ImageSlider
            oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
            newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <ImageSlider
            oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
            newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ResultContainer;
