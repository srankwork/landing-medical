import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import partner1 from '../image/photos/1.jpg';
import partner2 from '../image/photos/2.jpg';
import partner3 from '../image/photos/3.jpg';
import partner4 from '../image/photos/4.jpg';
import partner5 from '../image/photos/5.jpg';
import partner6 from '../image/photos/6.jpg';
import partner7 from '../image/photos/7.jpg';
import partner8 from '../image/photos/8.jpg';
import partner9 from '../image/photos/9.jpg';
import partner10 from '../image/photos/10.jpg';
import partner11 from '../image/photos/hundOrdg.png';


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
        className="flex flex-col mt-28"
      >
        <h1 className="text-center  text-4xl md:text-5xl font-semibold leading-tight tracking-tighter text-primary">
          TRUSTED BY
        </h1>

        <div className=" flex overflow-hidden justify-center mt-14">
          <div className=" flex  items-center justify-between animate-rotate">
            {replicateArray(
              [
                {
                  img: partner1,
                },
                {
                  img: partner2,
                },
                {
                  img: partner3,
                },
                {
                  img: partner4,
                },
                {
                  img: partner5,
                },
                {
                  img: partner6,
                },
                {
                  img: partner7,
                },
                {
                  img: partner8,
                },
                {
                  img: partner9,
                },
                {
                  img: partner10,
                },
                // {
                //   img: partner11,
                // },
              ],
              50
            ).map((e, index) => (
              <div
                key={`rating-${index}`}
                className="flex items-center justify-center md:justify-start mr-24 object-fill w-[200px] md:w-[200px]"
              >
                <img
                  src={e.img}
                  className="object-fill w-[200px] md:w-[200px]"
                  alt="logo"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Rating;
