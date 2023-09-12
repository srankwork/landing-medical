import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import doctorImg from '../image/photos/dr-prachi-patil.png';

const DoctorSction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="md:flex bg-primary mt-16 md:mt-24"
    >
      <div
        className="md:w-1/2 h-96 md:h-auto  bg-lightgray bg-center flex flex-col bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url('${doctorImg}')`,
        }}
      >
        <div className="bg-white p-4 w-full md:w-1/2 mt-auto ml-0 md:ml-auto mr-auto text-center">
          <h1>
            Meet
            <span className="ml-1 font-semibold text-secondry">
              Dr. Prachi Patil
            </span>
          </h1>
        </div>
      </div>

      <div className="w-full md:w-1/2 p-10 text-white pt-16 pb-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-primary-color">
          Celebrity Cosmetologist
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-128 font-montserrat text-white mt-2 md:mt-4">
          Medical Head & Founder at Novacutis Clinic
        </h1>
        {/* List of Pointers */}
        <ul className=" p-0 mt-8 md:mt-12">
          {[
            'MBBS - GOVT MEDICAL COLLEGE (India), Adv. Diploma in Cosmetology (UK)',
            'Expert cosmetologist with over 15 years of experience in medicine.',
            'Internationally Certified trained professionals of aesthetic medicine.',
            'Faculty Member of AMI(Allergan Medical Institute).',
          ].map((e) => (
            <li
              key={e}
              className="mb-4 md:mb-5 flex items-center  transition-transform transform hover:translate-x-2 cursor-default text-sm md:text-lg"
            >
              <span className=" cursor-pointer inline-block w-2 h-2 rounded-full  bg-white mr-4"></span>
              {e}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default DoctorSction;
