import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import stage1 from '../image/hair-transplate/Icons/Stage1.png';
import stage2 from '../image/hair-transplate/Icons/Stage2.png';
import stage3 from '../image/hair-transplate/Icons/Stage3.png';
import stage4 from '../image/hair-transplate/Icons/Stage4.png';
import stage5 from '../image/hair-transplate/Icons/Stage5.png';
import stage6 from '../image/hair-transplate/Icons/Stage6.png';
import stage7 from '../image/hair-transplate/Icons/Stage7.png';
import stage8 from '../image/hair-transplate/Icons/Stage8.png';

const radioImage = [
  { img: stage1, value: 1 },
  { img: stage2, value: 2 },
  { img: stage3, value: 3 },
  { img: stage4, value: 4 },
  { img: stage5, value: 5 },
  { img: stage6, value: 6 },
  { img: stage7, value: 7 },
  { img: stage8, value: 8 },
];

const BookAppointment = ({ showPadding }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={`px-4 md:px-10 ${
        showPadding ? 'pt-14 md:pt-28' : ''
      } container m-auto`}
      id="appointmentForm"
    >
      <p className=" mb-8 font-poppins text-lg md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        Curious about how much it will cost you?
      </p>
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
                  type="number"
                  className="border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="YOUR AGE"
                />
              </div>
            </div>
            <p className='text-center text-primary font-semibold mt-6 mb-2'>Grade of Baldness:</p>
            <div className="flex flex-wrap m-auto justify-center">
              {[...radioImage.slice(0, 4)].map((e) => (
                <div
                  key={`radiobutton-${e.value}`}
                  class="mr-6 md:mr-10 mt-4 flex flex-col items-center space-y-2"
                >
                  <img
                    src={e.img}
                    className="w-8 md:w-12 h-8 md:h-12 rounded-full"
                  />
                  <input
                    type="radio"
                    value={e.value}
                    class="form-radio text-indigo-600"
                    name="radio-group"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap m-auto justify-center">
              {[...radioImage.slice(4)].map((e) => (
                <div
                  key={`radiobutton-${e.value}`}
                  class="mr-6 md:mr-10 mt-4 flex flex-col items-center space-y-2"
                >
                  <img
                    src={e.img}
                    className="w-8 md:w-12 h-8 md:h-12 rounded-full"
                  />
                  <input
                    type="radio"
                    value={e.value}
                    class="form-radio text-indigo-600"
                    name="radio-group"
                  />
                </div>
              ))}
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
