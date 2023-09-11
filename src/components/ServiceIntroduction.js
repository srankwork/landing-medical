import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import whychooseus from '../image/hair-transplate/photos/whychooseus.jpg';

const ServiceIntroduction = () => {
  const serviceList = [
    { header: 'Reduce the chance of ingrown hair', child: [] },
    { header: 'Avoid uncomfortable shaving rashes', child: [] },
    { header: 'Achieve silky smooth skin', child: [] },
    { header: 'Cheaper than waxing', child: [] },
    { header: 'Safe & Effective technology', child: [] },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex bg-primary  mt-28">
      <motion.div
        initial={{ x: '-25%', opacity: 0 }}
        animate={{ x: inView ? 0 : '-25%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="hidden md:block w-1/2 h-auto bg-lightgray bg-cover bg-center"
        style={{
          backgroundImage: `url('${whychooseus}')`,
        }}
      ></motion.div>

      <motion.div
        initial={{ x: '25%', opacity: 0 }}
        animate={{ x: inView ? 0 : '25%', opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 px-4 text-white p-10 md:pl-6"
      >
        <p className="uppercase text-white font-poppins text-xl font-semibold leading-tight tracking-tighter">
          Why choose us
        </p>
        <div
          className="block md:hidden mt-3 md:w-1/2 h-60 md:h-screen bg-cover bg-no-repeat bg-center relative"
          style={{
            backgroundImage: `url('${whychooseus}')`,
          }}
        ></div>
        <h1 className="capitalize text-2xl md:text-5xl font-semibold font-montserrat mt-4 md:mt-3 text-white font-poppins leading-tight tracking-tighter">
          The permanent solution to unwanted hair
        </h1>
        <p className="mt-2 md:mt-5 text-info-color font-poppins text-base md:text-xl font-medium leading-tight md:tracking-tighter">
          At Novacutis Cosmetic Clinic, we offer the latest techniques to battle
          hair in unwanted areas. We believe in a holistic approach to hair
          removal that is why we use only state-of-the-art equipment which is
          operated by internationally certified technicians for your safety and
          comfort.
        </p>

        <ul className="list-none p-0 mt-8 md:mt-12">
          {serviceList.map((e) => (
            <div key={`${e.header}`}>
              <li
                key={e['header']}
                className=" font-semibold mt-4 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl cursor-pointer"
              >
                <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
                {e['header']}
              </li>

              {e['child'].map((c) => (
                <li
                  key={c}
                  className="mt-2 ml-6  flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-lg"
                >
                  <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
                  {c}
                </li>
              ))}
            </div>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ServiceIntroduction;
