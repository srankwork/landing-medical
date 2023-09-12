import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import practo from '../image/Icons/Practo.png';
import google from '../image/Icons/google.png';
import jd from '../image/Icons/jd.png';

function replicateArray(arr, times) {
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push(...arr);
  }
  return result;
}

const Rating = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className=" flex justify-center items-center m-auto mt-20 md:mt-28 px-4 md:px-0 w-full md:w-4/5"
      >
        <div className="relative overflow-hidden flex justify-between w-full">
          <div className="hidden md:flex items-center justify-between animate-rotate md:animate-none w-full">
            {[
              {
                star: 4.9,
                review: 182,
                img: google ,
              },
              {
                star: 5,
                review: 40,
                img: practo,
              },
              {
                star: 4.8,
                review: 137,
                img: jd,
              },
            ].map((e, index) => (
              <div
                key={`rating-${index}`}
                className="flex items-center justify-center md:justify-start min-w-fit mr-12 md:mr-0"
              >
                <img
                  src={e.img}
                  className="h-16 md:h-20  w-16 md:w-20 rounded-full"
                  alt="logo"
                />
                <div className="ml-4 space-y-1 flex flex-col">
                  <span className=" text-xl md:text-2xl flex items-center">
                    <div class="flex">
                      <div class="star star-filled"></div>
                      <div class="star star-filled"></div>
                      <div class="star star-filled"></div>
                      <div class="star star-filled"></div>
                      <div
                        class={`star ${
                          e.star == 5 ? 'star-filled' : 'star-half-filled'
                        }`}
                      ></div>
                    </div>
                    <span className=" ml-2 font-medium text-sm md:text-lg text-header">
                      {e.star}
                    </span>
                  </span>
                  <p className="font-normal text-sm md:text-lg text-center text-header">
                    {e.review} Review
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className=" flex md:hidden items-center justify-between animate-rotate md:animate-none">
            {replicateArray(
              [
                {
                  star: 4.9,
                  review: 182,
                  img: google,
                },
                {
                  star: 5,
                  review: 40,
                  img: practo,
                },
                {
                  star: 4.8,
                  review: 137,
                  img: jd,
                },
              ],
              20
            ).map((e, index) => (
              <div
                key={`rating-${index}`}
                className="flex items-center justify-center md:justify-start mr-12 md:mr-0"
                style={{ width: '200px' }}
              >
                <img
                  src={e.img}
                  className="h-16 md:h-20  w-16 md:w-20 rounded-full"
                  alt="logo"
                />
                <div className="ml-4 space-y-1 flex flex-col">
                  <span className=" text-xl md:text-2xl flex items-center">
                    <div class="flex">
                      <div class="star star-filled"></div>
                      <div class="star star-filled"></div>
                      <div class="star star-filled"></div>
                      <div class="star star-filled"></div>
                      <div
                        class={`star ${
                          e.star == 5 ? 'star-filled' : 'star-half-filled'
                        }`}
                      ></div>
                    </div>
                    <span className=" ml-2 font-medium text-sm md:text-lg text-header">
                      ({e.star})
                    </span>
                  </span>
                  <p className="font-normal text-sm md:text-lg text-center text-header">
                    {e.review} Review
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Rating;