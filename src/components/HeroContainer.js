import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

const HeroContainer = () => {
  const listOfKnowMore = [
    {
      header: 'The ultimate solution for hair loss',
      content:
        'The hair transplant procedure relocates follicles from one part of the body (usually the back of the head) to bald or thinning areas, treating pattern baldness and enhancing eyebrows, lashes, beard, and more.'
    },
    {
      header: 'Enhance your facial features',
      content:
        'With meticulous precision, our skilled team implants individual hair follicles, creating beautifully defined eyebrows or a fuller, more masculine beard.'
    },
    {
      header: 'Advanced Techniques',
      content:
        'Novacutis Clinic by Dr. Prachi offers a wide range of advanced techniques to battle hair loss like mesotherapy, PRP treatment for hair, 2nd gen FUE and 3rd gen BIO FUE to name a few. Follicular Unit Extraction (FUE) is the industry standard technique used around the world. BIO FUE is a more efficient and advanced technique for hair transplant.'
    },
    {
      header: '2nd Gen FUE',
      content:
        'Follicular Unit Extraction (FUE) involves extracting individual hair follicles from donor areas and implanting them in the target region, leaving no visible scars.'
    }
  ];

  const [knowMore, setKnowMore] = useState(false);

  return (
    <div>
      <div className=' bg-background my-4 md:my-10 lg:flex lg:justify-center lg:items-center'>
        <div className='lg:w-1/2 p-6 order-2 lg:order-1'>
          <p className='font-poppins text-base md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary mb-2'>
            Hair - Trasplant
          </p>
          <h1 className='mt-2 font-poppins text-4xl md:text-6xl font-semibold leading-tight tracking-tighter text-header'>
            Get the hair you've always dreamed of!
            <br />
            Results
          </h1>
          <p className='mt-2 md:mt-4 text-lightblue font-poppins text-base md:text-xl font-medium leading-snug'>
            Lastest Hair Transplant Techniques at Novacutis Clinic
          </p>
          <button
            onClick={() => setKnowMore(!knowMore)}
            class='mt-8 md:mt-11 flex items-center border-2 border-primary text-primary bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm'
          >
            KNOW MORE
            {knowMore ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill="#08589F"
                className='h-6 w-6 ml-2 text-primary'
              >
                <path d='m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill="#08589F"
                className='h-6 w-6 ml-2 text-primary'
              >
                <path d='M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z' />
              </svg>
            )}
          </button>
        </div>

        <div className='hidden md:block lg:w-1/2 order-1 lg:order-2'>
          <img
            src='https://img.freepik.com/premium-photo/head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become-shaggy-advertising-poster-hair-transplant-clinic-treatment-baldness_168410-1887.jpg?w=1060'
            alt='Image'
            className='w-full h-full'
          />
          {/* <ImageSlider
          oldImage='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp'
          newImage='https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp'
        /> */}
        </div>
      </div>
      <div
        className={` ${
          knowMore ? 'block' : 'hidden'
        } flex flex-col justify-center mt-8`}
      >
        {listOfKnowMore.map((e, index) => (
          <div
            className='flex flex-col justify-center items-center mt-6 md:mt-12'
            key={`${index}-knowmore`}
          >
            <h1 className='font-poppins text-2xl md:text-4xl font-semibold leading-tight tracking-tighter text-header text-center'>
              {e['header']}
            </h1>
            <p className='mt-2 font-poppins text-lg md:text2xl font-normal leading-tight md:w-3/4 text-center px-4'>
              {e['content']}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContainer;
