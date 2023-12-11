import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import brookingsLogo from '../image/Icons/brookings-logo.png';
import jacobLogo from '../image/Icons/jacob-foundation-logo.jpg';
import undpLogo from '../image/Icons/undp-logo.jpeg';
import oupLogo from '../image/Icons/oup-logo-big.jpg';

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
        className="flex flex-col mt-10"
      >
        <h1 className="text-secondary uppercase text-center font-poppins text-4xl font-semibold leading-normal">
          Trusted by
        </h1>

        <div className=" flex overflow-hidden justify-center mt-14">
          <div className=" flex  items-center justify-between animate-rotate">
            {replicateArray(
              [
                {
                  img: brookingsLogo,
                },
                {
                  img: jacobLogo,
                },
                {
                  img: undpLogo,
                },
                {
                  img: oupLogo,
                },
              ],
              40
            ).map((e, index) => (
              <div
                key={`rating-${index}`}
                className="flex items-center justify-center md:justify-start mr-24"
                style={{ width: '200px' }}
              >
                <img src={e.img} className="h-[80px] w-[200px]" alt="logo" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Rating;
