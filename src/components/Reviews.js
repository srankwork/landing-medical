import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const review = [
  {
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-1.webp',
    review:
      'Tuspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus. Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. Nullam varius libero id odio finibus, non faucibus lacus venenatis.',
    name: 'SHELLY - MODEL',
    reviewCount: '500',
  },
  {
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp',
    review:
      'Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. Nullam varius libero id odio finibus, non faucibus lacus venenatis. Suspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus.',
    name: 'ISHA CRYSTOPER - ACTOR',
    reviewCount: '600',
  },
  {
    img: 'https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-3.webp',
    review:
      'Suspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus. Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. Nullam varius libero id odio finibus, non faucibus lacus venenatis.',
    name: 'JASMINE - PHOTOGRAPHER',
    reviewCount: '550',
  },
];

const Testimonial = ({ imageSrc, review, userName, reviewCount }) => {
  return (
    <div className="md:flex items-center justify-center">
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          src={imageSrc}
          alt={`${userName}'s testimonial`}
          className="rounded-sm w-24  md:w-60 h-24 md:h-60"
          width="auto"
          height="auto"
        />
      </div>
      <div className="w-full md:w-1/3 px-4 mt-4 md:mt-0">
        <p className="text-white font-poppins text-sm md:text-lg font-medium leading-snug tracking-tight">
          {review}
        </p>
        <p className="mt-4 md:mt-6 text-black-600 font-semibold md:font-bold text-center md:text-left text-header">
          {userName}
        </p>
        <div className="flex items-center justify-center md:justify-start mt-2">
          <span className=" text-white  md:text-2xl mr-2 md:mr-3">★★★★★</span>{' '}
          <span className="font-semibold text-sm md:text-2xl text-header tracking-wide">
            ({reviewCount})
          </span>
        </div>
      </div>
    </div>
  );
};

const ReviewContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [sliderIndex, setSliderIndex] = useState(0);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="mt-12 md:mt-24 pt-14 md:pt-8 pb-14 bg-secondry"
    >
      {/* <p className='font-semibold tracking-widest uppercase text-primary text-center'>
        CLIENT REVIEWS
      </p> */}
      <h1 className="text-center font-poppins text-3xl md:text-5xl font-semibold leading-tight tracking-tighter text-header">
        WHAT PEOPLE SAYS
      </h1>

      <div className="mt-8 md:mt-10">
        <Testimonial
          imageSrc={review[sliderIndex]['img']}
          review={review[sliderIndex]['review']}
          userName={review[sliderIndex]['name']}
          reviewCount={review[sliderIndex]['reviewCount']}
        />
      </div>
      <div className="flex justify-center mt-8">
        {[0, 1, 2].map((e) => (
          <span
            key={`slider-${e}`}
            onClick={() => setSliderIndex(e)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setSliderIndex(e)}
            className={`h-1 ${
              e === sliderIndex ? 'w-8 bg-white' : 'w-4 bg-primary'
            } m-1 md:m-2 rounded-sm cursor-pointer hover:w-8 hover:bg-background transition-width  duration-300 ease-in-out text-secondry`}
          >
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewContainer;
