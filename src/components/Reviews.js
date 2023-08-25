import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Testimonial = ({ imageSrc, review, userName, rating }) => {
  return (
    <div className="md:flex items-center justify-center">
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={imageSrc}
          alt={`${userName}'s testimonial`}
          className="rounded-sm w-24  md:w-60 h-24 md:h-60"
        />
      </div>
      <div className="w-full md:w-1/3 px-2">
        <p className="text-white font-poppins text-sm md:text-lg font-medium leading-snug tracking-tight">
          {review}
        </p>
        <p className="mt-4 md:mt-6 text-black-600 font-semibold md:font-bold text-center md:text-left text-header">
          {userName}
        </p>
        <div className="flex items-center justify-center md:justify-start mt-2">
          <span className=" text-white  md:text-2xl mr-2 md:mr-3">★★★★★</span>{' '}
          <span className="font-semibold text-sm md:text-2xl text-header tracking-wide">
            (213)
          </span>
        </div>
      </div>
    </div>
  );
};

const ReviewContainer = () => {
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
      className="mt-12 md:mt-24 pt-4 md:pt-8 pb-14 bg-secondry"
    >
      {/* <p className='font-semibold tracking-widest uppercase text-primary text-center'>
        CLIENT REVIEWS
      </p> */}
      <h1 className="text-center font-poppins text-3xl md:text-5xl font-semibold leading-tight tracking-tighter text-header">
        WHAT PEOPLE SAYS
      </h1>

      <div className="mt-8 md:mt-10">
        <Testimonial
          imageSrc="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp"
          review="Suspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus. 
        Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. 
        Nullam varius libero id odio finibus, non faucibus lacus venenatis."
          userName="JASMINE - PHOTOGRAPHER"
          rating="5.0"
        />
      </div>
    </motion.div>
  );
};

export default ReviewContainer;