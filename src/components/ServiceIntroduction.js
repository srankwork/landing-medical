import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import whychooseus from '../image/hair-transplate/photos/whychooseus.jpeg';

const ServiceIntroduction = () => {
  const serviceList = [
    { header: 'Enhance your facial features', child: [] },
    { header: 'Advance Techniques', child: ['2nd Gen FUE', '3rd Gen BIO FUE'] },
    {
      header: 'Complementing Haircare Therapy',
      child: ['PRP Therapy', 'Mesotherapy', 'Derma Pen Therapy'],
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="flex bg-primary  mt-28"
    >
      <div
        className="hidden md:block w-1/2 h-auto bg-lightgray bg-cover bg-center"
        style={{
          backgroundImage: `url('${whychooseus}')`,
        }}
      ></div>

      <div className="w-full md:w-1/2 px-4 text-white p-10 p-0 md:pl-6">
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
          The Ultimate Hair Loss Solution
        </h1>
        <p className="mt-2 md:mt-5 text-info-color font-poppins text-base md:text-xl font-medium leading-tight md:tracking-tighter">
          At Novacutis Cosmetic Clinic, we offer a wide range of advanced
          techniques to battle hair loss. We believe in a holistic approach to
          hair restoration that is why in addition to our advanced hair
          transplant techniques, we offer a range of effective services that
          work in harmony to maximise your hair transplant results.
        </p>

        <ul className="list-none p-0 mt-8 md:mt-12">
          {serviceList.map((e) => (
            <>
              <li
                key={e['header']}
                className=" font-semibold mt-4 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl"
              >
                <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
                {e['header']}
              </li>

              {e['child'].length ? (
                e['child'].map((c) => (
                  <li
                    key={c}
                    className="mt-2 ml-6  flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-lg"
                  >
                    <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
                    {c}
                  </li>
                ))
              ) : (
                <></>
              )}
            </>
          ))}
        </ul>
      </div>

      {/* <div className=" bg-primary hidden md:block w-80 md:w-1/2 h-96 md:h-screen bg-cover bg-no-repeat bg-center">
          <img src="https://plastic-surgeon.abelle.themerex.net/wp-content/uploads/2022/06/background-1-copyright.jpg" />
        </div>
   */}
    </motion.div>
  );
};

export default ServiceIntroduction;
