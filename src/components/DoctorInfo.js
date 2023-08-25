import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const DoctorSction = () => {
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
      class="md:flex bg-primary  md:mt-24"
    >
      <div
        class="md:w-1/2 h-80 md:h-auto bg-lightgray bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Roll-large-Img-1.webp)`,
        }}
      >
        <div className="bg-white p-4 w-full md:w-1/2 mt-auto m-10 ml-0 md:ml-10">
          <h1>
            <span className="font-semibold text-secondry">
              Dr.JoeThomastellus
            </span>{' '}
            Eu Odio Bibendum Aliquam Volutpat Massa In BestDoctormentum. Nullam
            Varius Libero Id Odio
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-10 text-white pt-16 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary-color">
          Hair - Trasplant Surgon
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-128 font-montserrat text-white mt-2 md:mt-4">
          JOE THOMAS - <span className="text-secondry">PHD</span>
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-lg">
          Dliquam magna massa, gravida finibus fermen Suspe ndisse consequat
          lacus libero. In ultrici Maecenatis.
        </p>
        {/* List of Pointers */}
        <ul class=" p-0 mt-8 md:mt-12">
          <li class="mb-4 md:mb-5 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl">
            <span class="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
            HAIR TRASPLANT
          </li>
          <li class="mb-4 md:mb-5 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl">
            <span class="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
            PLASTIC SURGERY
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default DoctorSction;
