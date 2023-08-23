import React from 'react';

const Testimonial = ({ imageSrc, review, userName, rating }) => {
  return (
    <div className='md:flex items-center bg-pink-200'>
      <div className='w-full md:w-1/3 flex justify-center'>
        <img
          src={imageSrc}
          alt={`${userName}'s testimonial`}
          className='rounded-sm w-50 h-40'
        />
      </div>
      <div className='w-full md:w-2/3'>
        <p className='text-lg text-gray-800'>{review}</p>
        <p className='text-gray-600'>{userName}-</p>
        <div className='flex items-center'>
          <span className='text-yellow-500 text-2xl'>{rating}</span>
        </div>
      </div>
    </div>
  );
};

const ReviewContainer = () => {
  return (
    <div className='relative md:flex bg-appointment-btn mt-14 md:mt-28'>
      <Testimonial
        imageSrc='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-testimonial-2.webp'
        review='Suspendisse sed nulla tempus, euismod nisi posuere, feugiat lectus. 
        Nulla tempus tellus eu odio bibendum congue. Aliquam volutpat massa in congue condimentum. 
        Nullam varius libero id odio finibus, non faucibus lacus venenatis.'
        userName='JASMINE - PHOTOGRAPHER'
        rating='5.0'
      />
    </div>
  );
};

export default ReviewContainer;
