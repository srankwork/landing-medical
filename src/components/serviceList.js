import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const services = [
  {
    header: 'Built For School',
    disc: 'CONTENT PENDING',
  },
  {
    header: 'Digital SEEK Curriculum',
    disc: 'CONTENT PENDING',
  },
  {
    header: 'Holistic & Global Education',
    disc: 'CONTENT PENDING',
  },
  {
    header: 'Real-time Assessment',
    disc: 'CONTENT PENDING',
  },
  {
    header: 'Performance Dashboard',
    disc: 'CONTENT PENDING',
  },
  {
    header: 'Scalable, Affordable & Accessible',
    disc: 'CONTENT PENDING',
  },
];

export default function ServiceList() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="m-32"
    >
      <h1 className="mt-4 font-poppins text-center text-2xl md:text-5xl font-semibold leading-none">
        Lift your aesthetic and your confidence!
      </h1>

      <div className="md:flex justify-between mt-24">
        {services.slice(0, 3).map((e) => (
          <div
            key={`service-${e['header']}`}
            className="flex flex-col justify-center items-center md:w-4/3 hover-card mt-8 md:mt-0 m-4 text-center"
          >
            <p className="mt-6 font-poppins text-center text-sm md:text-base font-semibold leading-6 tracking-wider  mb-2">
              {e['header']}
            </p>
            <p>{e['disc']}</p>
          </div>
        ))}
      </div>
      <div className="md:flex justify-center md:mt-16">
        {services.slice(3).map((e, index) => (
          <div
            key={`service-${e['header']}`}
            className="flex flex-col justify-center items-center md:w-4/3 hover-card mt-8 md:mt-0 m-4 text-center"
          >
            <p className="mt-6 font-poppins text-center text-sm md:text-base font-semibold leading-6 tracking-wider  mb-2">
              {e['header']}
            </p>
            <p>{e['disc']}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
