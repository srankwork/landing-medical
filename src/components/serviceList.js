import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import minimallyImg from '../image/Icons/minimally.jpg';
import personalisedImg from '../image/Icons/personalised.jpg';
import ImmediatImg from '../image/Icons/Immediate.jpg';
import safetyImg from '../image/Icons/safety.jpg';

const services = [
  {
    header: 'Personalised Care',
    img: personalisedImg,
    disc: 'Tailor-made for your beauty goals, ensuring you shine naturally!',
  },
  {
    header: 'Minimally Invasive Excellence',
    img: minimallyImg,
    disc: 'Fet back to life while enjoying incredible results in no time.',
  },
  {
    header: 'Immediate & Progressive Results',
    img: ImmediatImg,
    disc: 'A fresh and revitalised look that stands the test of time!',
  },
  {
    header: 'Safety & Trust',
    img: safetyImg,
    disc: 'Giving you the peace of mind you deserve for your cosmetic journey.',
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
      className="mt-16 md:mt-24 px-4 md:w-3/4 justify-center m-auto"
    >
      <p className="font-poppins text-lg md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        Thread Lift
      </p>
      <h1 className="mt-4 font-poppins text-center text-2xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
        Lift your aesthetic and your confidence!
      </h1>

      <div className="md:flex justify-between mt-16">
        {services.slice(0, 3).map((e) => (
          <div
            key={`service-${e['header']}`}
            className="flex flex-col justify-center items-center md:w-4/3 hover-card mt-8 md:mt-0 m-4 text-center"
          >
            <img
              className="w-24 h-24"
              src={e['img']}
              alt="service"
              width="auto"
              height="auto"
            />
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
            <img
              className={`${index == 1 ? 'h-32 w-32' : 'h-28 w-32'}`}
              src={e['img']}
              alt="service"
              width="auto"
              height="auto"
            />
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
