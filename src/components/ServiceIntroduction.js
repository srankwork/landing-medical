import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import whychooseus from '../image/hair-transplate/photos/whychooseus.jpeg';
import { withPrefix } from 'gatsby';

const ServiceIntroduction = ({ changeServiceId }) => {
  const serviceList = [
    {
      header: 'Enhance your facial features',
      id: 'enhance_your_facial_features',
      child: [],
    },
    {
      header: 'Advance Techniques',
      id: 'advance_techniques',
      child: [
        { name: '2nd Gen FUE', id: '2nd_gen_FUE' },
        { name: '3rd Gen BIO FUE', id: '3rd_gen_bio_fue' },
      ],
    },
    {
      header: 'Complementing Haircare Therapy',
      id: 'complementing_haircare_therapy',
      child: [
        { name: 'PRP Therapy', id: 'prp_therapy' },
        { name: 'Mesotherapy', id: 'mesotherapy' },
        { name: 'Derma Pen Therapy', id: 'derma_pen_therapy' },
      ],
    },
  ];

  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="flex bg-primary  mt-28">
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block w-1/2 h-auto bg-lightgray bg-cover bg-center"
        style={{
          backgroundImage: `url('${withPrefix(whychooseus)}')`,
        }}
      ></motion.div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 px-4 text-white p-10 md:pl-6"
      >
        <p className="uppercase text-white font-poppins text-xl font-semibold leading-tight tracking-tighter">
          Why choose us
        </p>
        <div
          className="block md:hidden mt-3 md:w-1/2 h-60 md:h-screen bg-cover bg-no-repeat bg-center relative"
          style={{
            backgroundImage: `url('${withPrefix(whychooseus)}')`,
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
            <div key={`${e.id}`}>
              <li
                key={e['header']}
                onClick={() => changeServiceId(e['id'])}
                className=" font-semibold mt-4 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2  text-base md:text-xl cursor-pointer"
              >
                <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
                {e['header']}
              </li>

              {e['child'].map((c) => (
                <li
                  key={c.id}
                  onClick={() => changeServiceId(c['id'])}
                  className="mt-2 ml-6  flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-pointer text-base md:text-lg"
                >
                  <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
                  {c.name}
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
