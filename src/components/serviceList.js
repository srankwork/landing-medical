import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import bio_fue from '../image/hair-transplate/Icons/bio_fue.png';
import fue from '../image/hair-transplate/Icons/FUE.jpeg';
import prp from '../image/hair-transplate/Icons/PRP.png';
import meso from '../image/hair-transplate/Icons/meso.jpg';

const services = [
  {
    header: 'Effective & Permanent',
    img: fue,
    disc: 'Novacutis Clinic offers expert laser technicians, using only the latest technology for year-round silky-smooth perfection.',
  },
  {
    header: 'Quick & Painless',
    img: bio_fue,
    disc: 'Elevate your hair removal routine with our permanent laser solution, leaving waxing and razors behind.',
  },
  {
    header: 'Cost-Effective',
    img: prp,
    disc: 'Our laser treatment eradicates unwanted hair, providing a cost-effective alternative to your monthly waxing sessions.',
  },
  {
    header: 'Cutting-Edge Tech',
    img: meso,
    disc: 'The future of hair removal,  Lasermach Technology utilises cutting-edge laser precision, guaranteeing enduring results, eliminating the need for temporary solutions and leaving your skin flawlessly smooth.',
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
        Laser Hair Removal
      </p>
      <h1 className="mt-4 font-poppins text-center text-2xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
        Benefits of Permanent Laser Hair Removal
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
      <div className="md:flex justify-between md:mt-16">
        {services.slice(3).map((e, index) => (
          <div
            key={`service-${e['header']}`}
            className="flex flex-col justify-center items-center md:w-4/3 hover-card mt-8 md:mt-0 m-4 text-center"
          >
            <img
              className={`${index == 1 ? 'h-32 w-32' : 'h-40 w-40'}`}
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
