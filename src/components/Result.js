import React from 'react';
import ImageSlider from './ImageSlider';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import before1 from '../image/hair-transplate/photos/before1.jpg';
import after1 from '../image/hair-transplate/photos/after1.jpg';
import after2 from '../image/hair-transplate/photos/b&a3.2.jpg';
import before2 from '../image/hair-transplate/photos/b&a3.1.jpg';

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
      <p className="font-poppins text-lg md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        Remarkable Results
      </p>
      <h1 className=" capitalize mt-4 font-poppins text-3xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        Transforming Dreams into Reality
      </h1>
      <div className="mt-12 md:flex px-4 justify-around">
        <div>
          <ImageSlider
            oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
            newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
          />
          {/* <ImageSlider oldImage={before1} newImage={after1} /> */}
        </div>
        <div className="mt-6 md:mt-0">
          <ImageSlider
            oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
            newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
          />
          {/* <ImageSlider oldImage={before2} newImage={after2} /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ResultContainer;
