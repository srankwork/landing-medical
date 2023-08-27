import React  from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const DoctorSction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="md:flex bg-primary  md:mt-24"
    >
      <div
        className="md:w-1/2 h-80 md:h-auto bg-lightgray bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: `url(https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Roll-large-Img-1.webp)`,
        }}
      >
        <div className="bg-white p-4 w-full md:w-1/2 mt-auto m-10 ml-0 md:ml-10">
          <h1>
            <span className="font-semibold text-secondry">
              Dr. Prachi Patel
            </span>{' '}
            Medical Head & Founder at Novacutis Clinic
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-10 text-white pt-16 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary-color">
          Hair - Trasplant Surgon
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-128 font-montserrat text-white mt-2 md:mt-4">
          Government Medical College -{' '}
          <span className="text-secondry">MBBS</span>
        </h1>
        <p className="mt-4 md:mt-6 text-sm md:text-lg">
          MBBS (Government Medical College) India, Advanced Dip. in Cosmetology
          (UK) <br />
          Expert cosmetologist with 14 years of experience in medicine
          Internationally certified trained professional in aesthetic medicine
          <br />
          Faculty member at AMI (Allergan Medical Institute) based in Kuala
          Lumpur
        </p>
        {/* List of Pointers */}
        <ul className=" p-0 mt-8 md:mt-12">
          <li className="uppercase mb-4 md:mb-5 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl">
            <span className=" cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
            cosmetologist expert
          </li>
          <li className="mb-4 md:mb-5 flex items-center group hover:text-secondry transition-transform transform hover:translate-x-2 cursor-default text-base md:text-xl">
            <span className="cursor-pointer inline-block w-2 h-2 rounded-full  bg-white group-hover:bg-secondry mr-4"></span>
            aesthetic medicine
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default DoctorSction;
