import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const review = [
  {
    review:
      'Amazing services, extremely long-lasting results, very gracious staff ambience and lasers are international quality. Been seeing Dr. Prachi for 8 years. Everyone I meet adores the texture of my skin.',
    name: 'Rajshri Bhatia',
    rating: '5 stars',
    date: '3 months ago',
  },
  {
    review:
      "It's a lovely and friendly treatment. It's a very great experience. The treatments are very best and the staff is also very friendly.",
    name: 'Srushti Dhotre',
    rating: '5 stars',
    date: '3 months ago',
  },
  {
    review:
      "I love the way every patient is treated and greeted. Every time I visit, it's a great experience. Special care is taken during each and every treatment as per your skin type. The doctor and staff are very much cooperative when it comes to understanding your needs of treatment and while the treatment is going on. Thanks for such a lovely experience.",
    name: 'Nisha Gupta',
    rating: '5 stars',
    date: '3 years ago',
  },
  {
    review:
      'Dr. Prachi is a very talented and smart skin specialist and she knows her job well. I love visiting her for treatments and the best part is her nature and staff is also very good and attentive.',
    name: 'Monica Damania',
    rating: '5 stars',
    date: 'a year ago',
  },
  {
    review:
      "Dr. Prachi's treatment is very effective and the way she handles the patients is really appreciable…the improvement in skin appearance is really remarkable.",
    name: 'Sudhir Mirgal (Sam)',
    rating: '5 stars',
    date: '9 months ago',
  },
];
const Testimonial = ({ review, userName, reviewCount }) => {
  return (
    <div className="md:flex items-center justify-center">
      <div className="w-full md:w-2/3 px-4 mt-4 md:mt-0 flex flex-col justify-between">
        <p className="text-white font-poppins text-sm md:text-lg font-medium leading-snug tracking-tight h-[18vh]">
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
            onClick={() => setSliderIndex(e)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setSliderIndex(e)}
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
