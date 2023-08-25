import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ServiceIntroduction = () => {
  const serviceList = [
    'Bio Integrated Fue',
    'Female Hair Transplant',
    'Beard & Moustache Transplant',
    'Body to Head Hair Transplant',
    'Eyebrow Transplant',
    'L3 Plasma Grow',
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 1 }}
      className="flex bg-primary  mt-24"
    >
      <div
        className="hidden md:block w-1/2 h-auto bg-lightgray bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plastic-surgeon.abelle.themerex.net/wp-content/uploads/2022/06/background-1-copyright.jpg')",
        }}
      ></div>

      <div className="w-full md:w-1/2 p-10 text-white">
        <p className="uppercase text-white font-poppins text-xl font-semibold leading-tight tracking-tighter">
          What we do
        </p>
        <div
          className="block md:hidden mt-3 md:w-1/2 h-60 md:h-screen bg-cover bg-no-repeat bg-center relative"
          style={{
            backgroundImage: `url(https://plastic-surgeon.abelle.themerex.net/wp-content/uploads/2022/06/background-1-copyright.jpg)`,
          }}
        ></div>
        <h1 className=" uppercase text-2xl md:text-5xl font-semibold font-montserrat mt-4 md:mt-3 text-white font-poppins leading-tight tracking-tighter">
          Advance Hair Trasplant
        </h1>
        <p className="mt-2 md:mt-5 text-info-color font-poppins text-base md:text-xl font-medium leading-tight md:tracking-tighter">
          Kurabitur suscipit nulla neque, ut laor eet erat sodales vel.
          Curabitur vitae tortor eu felis scelerisque varius a non. Curabitur et
        </p>
        {/* 
        <div className="w-full h-1 mt-12">
          <div className="w-full h-full bg-transparent animate-dashed-line" />
        </div> */}

        <ul className="list-none p-0 mt-8 md:mt-12">
          {serviceList.map((e) => (
            <li
              key={e}
              className="mb-4 md:mb-5 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl"
            >
              <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
              {e}
            </li>
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
