import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import impact1 from '../image/photos/impact1.jpg';
import impact2 from '../image/photos/impact2.jpg';
import impact3 from '../image/photos/impact3.jpg';
import impact4 from '../image/photos/impact4.jpg';

const ResultContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="mt-10 md:mt-20 overflow-hidden hero-bg-2 pt-24 pb-24">
      <motion.p
        initial={{ x: '-25%', opacity: 0 }}
        animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="font-poppins text-4xl  font-semibold leading-6 tracking-wider uppercase text-black text-center"
      >
        Our Impact
      </motion.p>
      <div className="mt-12 md:flex px-4 justify-around w-screen overflow-hidden">
        <motion.div
          initial={{ x: '-25%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
            <img src={impact1} className="h-[100%] w-[300px]" alt="logo" />
         </motion.div>
            <img src={impact2} className="h-[100%] w-[300px]" alt="logo" />
            <img src={impact3} className="h-[100%] w-[300px]" alt="logo" />
            <img src={impact4} className="h-[100%] w-[300px]" alt="logo" />
          
      </div>
    </div>
  );
};

export default ResultContainer;
