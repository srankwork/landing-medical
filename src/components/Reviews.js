import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const review = [
  {
    name: 'Bhaskar Anil',
    review:
      'Such professionalism! So comfortable through the whole experience and the team was lovely! My experience with the doctor was great and she did a fantastic job! So pleased with the end result! My aftercare was second to none and well worth the money spent! Thank you all!!',
  },
  {
    name: 'Yogavarsha V',
    review:
      'Dr. Prachi is very sweet and honest and her staff are very cooperative. I am always comfortable and safe for any treatment from her clinic. Trust me, it really works, since Dr. Prachi is an expert in her field. I have personally taken Lazer, coolsculpting, facial botox and results have dramatically changed my look.',
  },
  {
    name: 'Nisha Gupta',
    review:
      "I love the way every patient is treated and greeted. Every time I visit, it's a great experience. Special care is taken during each and every treatment as per your skin type. The doctor and staff are very much cooperative when it comes to understanding your needs of treatment and while the treatment is going on. Thanks for such a lovely experience.",
  },
  {
    name: 'Monica Damania',
    review:
      'Dr. Prachi is a very talented and smart skin specialist and she knows her job well. I love visiting her for treatments and the best part is her nature and staff is also very good and attentive.',
  },
  {
    name: 'Jayesh Yadav',
    review:
      "I visited the Novacutis clinic for Anti-ageing treatment after consulting the doctor who said cosmetic injectables will be the best for me. I had an amazing experience with the prime muscle relaxer at novacutis clinic thanks to their exceptional doctor. From the moment I stepped into the clinic, the staff was friendly and welcoming. The doctor's expertise and precision during the procedure were impressive and the results were fantastic! The clinic is clean and modern, creating a comfortable atmosphere. I highly recommend the clinic for Botox treatments, especially with their skilled and talented doctor. You won't be disappointed!",
  },
];
const Testimonial = ({ review, userName, reviewCount }) => {
  return (
    <div className="md:flex items-center justify-center">
      <div className="w-full md:w-2/3 px-4 mt-4 md:mt-0 flex flex-col justify-between">
        <p className="text-white font-poppins text-sm md:text-lg font-medium leading-snug tracking-tight h-[200px]">
          {review}
        </p>
        <p className="capitalize mt-4 md:mt-6 text-black-600 font-semibold md:font-bold text-center text-header">
          {userName}
        </p>
        <div className="flex items-center justify-center mt-2">
          <span className=" text-white  md:text-2xl mr-2 md:mr-3">★★★★★</span>{' '}
          <span className="font-semibold text-sm md:text-2xl text-header tracking-wide">
            {/* ({reviewCount}) */}
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
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!intervalId) {
      const id = setInterval(() => {
        setSliderIndex((prevCounter) => (prevCounter + 1) % 5);
      }, 3000);
      setIntervalId(id);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const handleClearInterval = (e) => {
    setSliderIndex(e);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 md:mt-24 pt-14 md:pt-14 pb-14 bg-secondry select-none"
    >
      <h1 className=" text-center font-poppins text-3xl md:text-5xl font-semibold leading-tight tracking-tighter text-header">
        Client Testimonials
      </h1>

      <div className="mt-8 md:mt-10">
        <Testimonial
          review={review[sliderIndex]['review']}
          userName={review[sliderIndex]['name']}
          reviewCount={review[sliderIndex]['reviewCount']}
        />
      </div>
      <div className="flex justify-center mt-8">
        {review.map((value, e) => (
          <span
            key={`slider-${e}`}
            onClick={() => handleClearInterval(e)}
            role="button"
            tabIndex={0}
            onKeyDown={() => handleClearInterval(e)}
            className={`h-1 ${
              e === sliderIndex ? 'w-8 bg-white' : 'w-4 bg-primary'
            } m-1 md:m-2 rounded-sm cursor-pointer hover:w-8 hover:bg-background transition-width  duration-300 ease-in-out text-secondry`}
          ></span>
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewContainer;
