import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BookAppointment = ({ forModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-20%', opacity: 0 }}
      animate={{ x: inView ? 0 : '-20%', opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`px-4 md:px-10 ${
        forModal ? '' : 'pt-14 md:pt-28'
      } container m-auto`}
      id="appointmentForm"
    >
      <p className="font-poppins text-xl md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        Curious about how much it will cost you?
      </p>
      <h1 className="mt-6 font-poppins text-center text-lg md:text-3xl font-semibold leading-none md:leading-snug  text-header">
        Experience the confidence of flawless skin with Novacutis Clinic
      </h1>

      <div className="md:flex md:space-x-4 mt-6 md:mt-14">
        <div className="md:w-3/4">
          <form>
            <div className="md:flex md:space-x-4  mb-0 md:mb-8">
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className="border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="NAME"
                />
              </div>
              <div className="mt-2 md:w-1/2">
                <input
                  type="number"
                  className="border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="PHONE"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:space-x-4">
              <div className="mt-2 md:w-1/2">
                <input
                  type="email"
                  className="border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="YOUR EMAIL"
                />
              </div>
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className="border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="AREA"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/4 mt-12 md:mt-0 items-center flex flex-col justify-center">
          <div className="hidden md:flex  justify-center items-center">
            <img
              src="https://www.novacutisclinics.com/assets/images/logo.png"
              className=" h-14 md:h-16 mr-2"
              alt="logo"
              width="auto"
              height="auto"
            />
            <h1 className="text-2xl md:text-2xl font-poppins font-semibold leading-tight tracking-tight text-header text-center mb-6 w-4/6">
              Book Your Appointment
            </h1>
          </div>
          <div className="w-full bg-primary py-2 px-6 rounded-sm transition-all duration-500 font-semibold text-lg text-center">
            <a href="#CallApi" className="text-white">
              Find Out Now!
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
