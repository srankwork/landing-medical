import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import bio_fue from '../image/hair-transplate/Icons/bio_fue.png';
import fue from '../image/hair-transplate/Icons/FUE.jpeg';
import prp from '../image/hair-transplate/Icons/PRP.png';
import meso from '../image/hair-transplate/Icons/meso.jpg';
import derma from '../image/hair-transplate/Icons/derma_pen.png';

const services = [
  {
    header: '2nd Gen FUE',
    img: fue,
    disc: 'Where precision meets perfection, and confidence reigns supreme.',
  },
  {
    header: '3rd Gen BIO FUE',
    img: bio_fue,
    disc: 'Experience the future of hair restoration with BIO FUE, a breakthrough blend of science and artistry.',
  },
  {
    header: 'PRP Therapy',
    img: prp,
    disc: 'The all-natural secret to healthier, thicker and luscious locks.',
  },
  {
    header: 'Mesotherapy',
    img: meso,
    disc: 'Our advanced treatment delivers essential nutrients directly to your scalp, promoting natural regrowth.',
  },
  {
    header: 'Derma Pen Therapy',
    img: derma,
    disc: 'This cutting-edge treatment stimulates natural hair growth and improves thickness.',
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
      transition={{ duration: 1 }}
      className="mt-14 md:mt-24 px-4 md:w-3/4 justify-center m-auto"
    >
      <p className="font-poppins text-lg md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        Hair Care
      </p>
      <h1 className="mt-1 font-poppins text-center text-2xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
        A variety of solutions for your individual needs
      </h1>

      <div className="md:flex justify-between mt-14">
        {services.slice(0, 3).map((e) => (
          <div
            key={`service-${e['header']}`}
            className="flex flex-col justify-center items-center md:w-4/3 hover-card mt-8 md:mt-0 m-4 text-center"
          >
            <img
              className="w-40 h-40"
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
        {services.slice(3).map((e) => (
          <div
            key={`service-${e['header']}`}
            className="flex flex-col justify-center items-center md:w-4/3 hover-card mt-8 md:mt-0 m-4 text-center"
          >
            <img
              className="w-40 h-40"
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
