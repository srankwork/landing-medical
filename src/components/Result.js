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
    <div
      ref={ref}
      className="mt-16 md:mt-24 overflow-hidden hero-bg-2 pt-16 md:pt-12 pb-24"
    >
      <motion.p
        initial={{ x: '-25%', opacity: 0 }}
        animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="text-center uppercase text-3xl md:text-5xl font-semibold leading-tight tracking-tighter text-primary"
      >
        Our Impact
      </motion.p>
      <div className="mt-12 flex px-4 flex-col md:flex-row justify-around items-center w-screen overflow-hidden">
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
      <div className="md:mt-8 px-4 md:px-16 overflow-hidden">
        {[
          {
            b: 'Bangladesh and Jharkhand (India):',
            p: 'Attitudes towards gender, skin tone, race and religion improved.',
          },
          { b: 'Uttarakhand (India):', p: 'A ten year-old boy convinced his parents to help him stop their neighbours from marrying off their child and send her to school instead.' },
          { b: 'Rajasthan (India):', p: 'Children deduced their elders were wasting water and instituted a system to regulate usage with buy-in from their village elders, demonstrating advocacy/agency.' },
        ].map((e) => (
          <p className="text-[#212529] mt-10 md:mt-0 md:leading-10 impact-point">
            <b className="text-[#28336e] font-bold">
              {e.b}
            </b>{' '}
            {e.p}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResultContainer;
