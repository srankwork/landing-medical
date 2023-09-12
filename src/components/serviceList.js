import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import forheadImg from '../image/Icons/forhead.png';
import completelyImg from '../image/Icons/completely.jpg';
import lipsImg from '../image/Icons/lips.png';
import rediscImg from '../image/Icons/redisc.png';
import economImg from '../image/Icons/econom.png';

const services = [
  {
    header: 'Preventive Anti-aging',
    img: rediscImg,
    disc: 'Boost your beauty naturally with proactive anti-aging magic.',
  },
  {
    header: 'Non-surgical Facelift',
    img: forheadImg,
    disc: 'Discover your best aesthetic, minus the surgery.',
  },
  {
    header: 'Get Luscious Lips',
    img: lipsImg,
    disc: 'Achieve youthful, balanced perfection and get a plumper pout in just 30 minutes.',
  },
  {
    header: 'Completely Safe & Natural Looking',
    img: completelyImg,
    disc: 'No need to break the bank for timeless beauty, experience a wallet-friendly transformation at Novacutis Clinic.',
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
        Dermal Fillers
      </p>
      <h1 className="mt-4 font-poppins text-center text-2xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
        Unveil a more youthful you!
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
