import React from 'react';
import ImageSlider from './ImageSlider';

const ResultContainer = () => {
  return (
    <div className="w-full mt-14 md:mt-24">
      <p className="font-semibold tracking-widest uppercase text-red-500 text-center">
        What Clients say
      </p>
      <h1 className="mt-4 text-2xl md:text-5xl font-semibold leading-128 font-montserrat text-center">
        Result that's show our value
      </h1>
      <div className='mt-12'>
        <ImageSlider
          oldImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-before-image-three.webp"
          newImage="https://sirpi.wpengine.com/wp-content/uploads/2023/06/home-1-after-image-three.webp"
        />
      </div>
    </div>
  );
};

export default ResultContainer;
