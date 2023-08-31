import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BookAppointment = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0 }}
      animate={{ scale: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="px-4 md:px-10 pt-14 md:pt-28"
      id="appointmentForm"
    >
      <h1 className="block md:hidden text-2xl md:text-3xl font-poppins font-semibold leading-tight tracking-tight text-header">
        Book Your Appointment
      </h1>
      <div className="md:flex md:space-x-4 mt-6 md:mt-14">
        <div className="md:w-3/4">
          <form>
            <div className="md:flex md:space-x-4  mb-0 md:mb-8">
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className="border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder"
                  placeholder="NAME"
                />
              </div>
              <div className="mt-2 md:w-1/2">
                <input
                  type="number"
                  className="border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder"
                  placeholder="phone"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:space-x-4">
              <div className="mt-2 md:w-1/2">
                <input
                  type="email"
                  className="border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder"
                  placeholder="YOUR EMAIL"
                />
              </div>
              <div className="mt-2 md:w-1/2">
                <input
                  type="number"
                  className="border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder"
                  placeholder="YOUR AGE"
                />
              </div>
              {/* <div className="mt-2 md:w-1/3">
                <input
                  type="text"
                  className="border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder"
                  placeholder="TREATMENT TYPE"
                />
              </div> */}
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
            <h1 className="text-2xl md:text-2xl font-poppins font-semibold leading-tight tracking-tight text-header text-center mb-6">
              Book Your Appointment
            </h1>
          </div>
          <div className="w-full bg-primary py-2 px-6 rounded-sm transition-all duration-500 font-semibold text-lg text-center">
            <a href="#CallApi" className="text-white">
              Appointment
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
