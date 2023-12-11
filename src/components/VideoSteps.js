import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const services = [
  {
    viId: 'https://www.youtube.com/embed/rQurlB0sXL0?controls=0',
    header: 'Using Rangeet',
  },
  {
    viId: 'https://www.youtube.com/embed/-u_KZ1xCbQc?controls=0',
    header: 'Creating An Account',
  },
  {
    viId: 'https://www.youtube.com/embed/yaJX11SMZIY?controls=0',
    header: 'Subscribing To A Curriculum',
  },
  {
    viId: 'https://www.youtube.com/embed/0k8H5ADNxzs?controls=0',
    header: 'Teaching And Submitting Data',
  },
];

export default function VideoSteps() {
  const [counter, setCounter] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [swipe, setSwipe] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div
        ref={ref}
        className="mt-36 px-4 md:px-0 md:w-4/5 justify-center m-auto select-none"
        id="serviceContainer"
      >
        {/* header */}
        <motion.p
          initial={{ x: '-5%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-poppins text-4xl font-semibold leading-6 tracking-wider uppercase text-black mb-2 text-center"
        >
          Hassle-free Onbroarding Process
        </motion.p>
        <div className="mt-12">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: '-5%', opacity: 0 }}
              animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="mt-8 font-poppins text-xl md:text-4xl font-semibold leading-none md:leading-snug  text-header text-center">
                {services[counter]['header']}
              </h1>
            </motion.div>

            <div className="space-x-4 hidden md:flex">
              <div
                className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => {
                  counter == 0
                    ? setCounter(services.length - 1)
                    : setCounter(counter - 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 text-white font-bold rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => {
                  counter == services.length - 1
                    ? setCounter(0)
                    : setCounter(counter + 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 text-white font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ y: '-15%', opacity: 0 }}
            animate={{ y: inView ? 0 : '-15%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 md:mt-12 flex items-center justify-center"
          >
            {/* <img
              className="md:h-96"
              src={services[counter]['img']}
              alt="our services"
              width="auto"
              height="auto"
            /> */}
            <iframe
              width="560"
              height="315"
            //   src="https://www.youtube.com/embed/rQurlB0sXL0?controls=0"
              src={services[counter]['viId']}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </motion.div>
        </div>
      </div>
    </>
  );
}
