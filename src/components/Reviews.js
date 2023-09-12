import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const review = [
  {
    review:
      "Dr. Prachi has such a wonderful personality. I came in to treat severe hair fall. The rapport that formed between us made my anguish disappear. Her genuineness in work can be seen through the effort she takes. She explained the treatment's goal and how each component of it will help to improve the condition. I'm glad she's my doctor.",
    name: 'Rutuja Patil',
    reviewCount: '2',
  },
  {
    review:
      'I am from Canada, and a friend of mine suggested I see Dr. Prachi about my hair loss issues while I was on vacation in India. I would like to say that my experience as a patient seeking a hair restoration treatment has been wonderful and incredibly satisfying. She is utterly competent, friendly, welcoming, and empathetic toward my needs as a client. For hair treatments, I would definitely suggest Novacutis and Dr. Prachi Patil.',
    name: 'deep sumal',
    reviewCount: '3',
  },
  {
    review:
      "I recently went under hair transplant and I'm really thrilled with the experience and with my results thanks to the doctor. ",
    name: 'Darshan Mane',
    reviewCount: '1',
  },
  {
    review:
      'Such professionalism! So comfortable through the whole experience and the team was lovely! My experience with the doctor was great and she did a fantastic job! So pleased with the end result! My aftercare was second to none and well worth the money spent! Thank you all!!',
    name: 'bhaskar anil',
    reviewCount: '2',
  },
  {
    review:
      "I had a great experience all around at Novacutis clinic, everyone was extremely courteous and helpful. At Dr.Prachi's clinic, all procedures went smoothly and so far I am very much happy with my hair transplant. Thankful & grateful to Dr. Prachi",
    name: 'Sharad Wasnik',
    reviewCount: '4',
  },
  {
    review:
      'I visited Dr. Prachi for my hair fall issues. Saw the results within a month. My hair is better than ever. Had the best experience. She is professional, well experienced and very sweet. I would recommend Novacutis and Dr. Prachi everytime',
    name: 'MINAL BHAGAT',
    reviewCount: '3',
  },
];

const Testimonial = ({ review, userName, reviewCount }) => {
  return (
    <div className="md:flex items-center justify-center">
      <div className="w-full md:w-2/3 px-4 mt-4 md:mt-0 flex flex-col justify-between">
        <p className="text-white font-poppins text-sm md:text-lg font-medium leading-snug tracking-tight h-[150px]">
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
        setSliderIndex((prevCounter) => (prevCounter + 1) % 6);
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
