import React from 'react';
import ImageSlider from './ImageSlider';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import after1 from '../image/hair-transplate/photos/b_a1.2.jpg';
import before1 from '../image/hair-transplate/photos/b_a1.1.jpg';
import after2 from '../image/hair-transplate/photos/b_a2.2.jpg';
import before2 from '../image/hair-transplate/photos/b_a2.1.jpg';
import after3 from '../image/hair-transplate/photos/b_a3.2.jpg';
import before3 from '../image/hair-transplate/photos/b_a3.1.jpg';
import after4 from '../image/hair-transplate/photos/b_a4.2.jpg';
import before4 from '../image/hair-transplate/photos/b_a4.1.jpg';

const ResultContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mt-10 md:mt-20">
      <motion.p
        initial={{ x: '-25%', opacity: 0 }}
        animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="font-poppins text-lg md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center"
      >
        Remarkable Results
      </motion.p>
      <motion.h1
        initial={{ x: '-25%', opacity: 0 }}
        animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className=" capitalize mt-4 font-poppins text-3xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center"
      >
        Transforming Dreams into Reality
      </motion.h1>
      <div className="mt-12 md:flex px-4 justify-around w-screen overflow-hidden">
        <motion.div
          initial={{ x: '-25%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImageSlider oldImage={before1} newImage={after1} />
        </motion.div>
        <motion.div
          initial={{ x: '25%', opacity: 0 }}
          animate={{ x: inView ? 0 : '25%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 md:mt-0"
        >
          <ImageSlider oldImage={before2} newImage={after2} />
        </motion.div>
      </div>
      <div className="mt-8 flex md:hidden justify-around w-screen overflow-hidden px-4">
        <motion.div
          initial={{ x: '-25%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <ImageSlider oldImage={before4} newImage={after4} />
        </motion.div>
      </div>
    </div>
  );
};

export default ResultContainer;
