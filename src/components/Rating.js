import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Rating = () => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='flex justify-between items-center m-auto mt-20 md:mt-28 px-4 md:px-0 w-full md:w-4/5 overflow-hidden'
      >
        {[
          {
            star: 5,
            review: 182,
            img: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
          },
          {
            star: 5,
            review: 40,
            img: 'https://img.icons8.com/?size=512&id=L1ws9zn2uD01&format=png'
          },
          {
            star: 5,
            review: 137,
            img: 'https://user-images.githubusercontent.com/42868728/70027410-164cdd00-15c8-11ea-9852-6982408e4ea6.png'
          }
        ].map((e, index) => (
          <div
            key={`rating-${index}`}
            className='flex animate-rotate md:animate-none items-center justify-center md:justify-start min-w-fit mr-12 md:mr-0'
          >
            <img
              src={e.img}
              className='h-16 md:h-20  w-16 md:w-20 rounded-full'
              alt='logo'
            />
            <div className='ml-4 space-y-1 flex flex-col'>
              <span className=' text-yellow-300 text-xl md:text-2xl'>
                ★★★★★
                <span className=' ml-2 font-medium text-sm md:text-lg text-header'>
                  (5)
                </span>
              </span>
              <p className='font-normal text-sm md:text-lg text-center text-header'>
                {e.review} Review
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Rating;
