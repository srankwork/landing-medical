import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const services = [
  {
    header: 'The ultimate solution for hair loss',
  },
  {
    header: 'Enhance your facial features',
  },
  {
    header: 'Advanced Techniques',
  },
  {
    header: '2nd Gen FUE',
  },
  {
    header: '3rd Gen BIO FUE',
  },
  {
    header: 'Complementing Haircare Therapy',
  },
  {
    header: 'PRP Therapy',
  },
  {
    header: 'Hair Meso Therapy',
  },
  {
    header: 'Derma Pen',
  },
];

export default function ServiceList() {
  const [counter, setCounter] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="mt-14 md:mt-24 px-4 md:w-3/4 justify-center m-auto"
    >
      <p className="font-poppins text-center text-sm md:text-base font-semibold leading-6 tracking-wider uppercase text-primary mb-2">
        Hair - Transplant
      </p>
      <h1 className="mt-1 font-poppins text-center text-2xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
        PICK YOUR TREATMENT
      </h1>

      <div className="md:flex justify-between mt-14">
        {[1, 2, 3].map((e) => (
          <div
            key={`service-${e}`}
            className="flex flex-col justify-center items-center md:w-1/3 hover-card mt-8 md:mt-0"
          >
            <img
              className="w-40 h-40"
              src="https://img.freepik.com/free-vector/hand-drawn-hair-transplant-infographic_23-2149735588.jpg?w=826&t=st=1693132713~exp=1693133313~hmac=850e0eef15c3217a8488aae17783d2402d1d9dd688658adcc5563d2b2afb362e"
              alt="service"
            />
            <p className="mt-6 font-poppins text-center text-sm md:text-base font-semibold leading-6 tracking-wider  mb-2">
              Hair Transplant
            </p>
          </div>
        ))}
      </div>
      <div className="md:flex justify-between md:mt-16">
        {[1, 2, 3].map((e) => (
          <div
            key={`service-${e}`}
            className="flex flex-col justify-center items-center md:w-1/3 hover-card mt-8 md:mt-0"
          >
            <img
              className="w-40 h-40"
              src="https://img.freepik.com/free-vector/hand-drawn-hair-transplant-infographic_23-2149735588.jpg?w=826&t=st=1693132713~exp=1693133313~hmac=850e0eef15c3217a8488aae17783d2402d1d9dd688658adcc5563d2b2afb362e"
              alt="service"
            />
            <p className="mt-6 font-poppins text-center text-sm md:text-base font-semibold leading-6 tracking-wider  mb-2">
              Hair Transplant
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
