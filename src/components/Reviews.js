import React from 'react';

const Testimonial = ({ imageSrc, review, userName, rating }) => {
  return (
    <div className='md:flex items-center justify-center'>
      <div className='w-full md:w-1/3 flex justify-center'>
        <img
          src={imageSrc}
          alt={`${userName}'s testimonial`}
          className='rounded-sm w-40  md:w-60 h-40 md:h-60'
        />
      </div>
      <div className='w-full md:w-1/3 px-2'>
        <p className='mt-4 md:mt-0 font-normal tracking-wide text-sm md:text-lg text-gray-800'>{review}</p>
        <p className='mt-4 md:mt-6 text-black-600 font-semibold md:font-bold'>{userName}-</p>
        <div className='flex items-center mt-1'>
          <span className='text-yellow-500 text-2xl'>★★★★★</span>
        </div>
      </div>
    </div>
  );
};

const ReviewContainer = () => {
  return (
    <div className='mt-12 md:mt-24 pt-8 md:pt-14 pb-14 bg-review-section'>
      <p className='font-semibold tracking-widest uppercase text-red-500 text-center'>
        CLIENT REVIEWS
      </p>
      <h1 className='mt-2 text-2xl md:text-5xl font-semibold leading-128 font-montserrat text-center'>
        WHAT PEOPLE SAYS
      </h1>

      <div className='mt-8 md:mt-12'>
        <Testimonial
          imageSrc='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp'
          review='Suspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus. 
        Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. 
        Nullam varius libero id odio finibus, non faucibus lacus venenatis.'
          userName='JASMINE - PHOTOGRAPHER'
          rating='5.0'
        />
      </div>
    </div>
  );
};

export default ReviewContainer;
