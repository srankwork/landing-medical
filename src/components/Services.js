import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import personalisedImg from '../image/photos/personalised.jpg';
import progressiveImg from '../image/photos/progressive.jpg';
import safetyImg from '../image/photos/safety.jpg';
import minimallyImg from '../image/photos/minimally.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const services = [
  {
    img: personalisedImg,
    header: 'Personalised Care',
    content:
      "We recognize that each individual is unique, and their cosmetic goals are as distinct as their features. That's why we prioritise personalised care. Your Thread Lift treatment will be carefully customised to your specific needs and goals. We work closely with you to ensure the results are not just noticeable but also natural-looking, enhancing your unique beauty.",
    id: 'personalised_care',
  },
  {
    img: minimallyImg,
    header: 'Minimally Invasive Excellence',
    content:
      ' Unlike traditional surgical facelifts, our procedure offers the benefits of reduced downtime and discomfort. You can return to your daily activities with minimal disruption to your routine while enjoying remarkable improvements in your appearance.',
    id: 'minimally_rnvasive_rxcellence',
  },
  {
    img: progressiveImg,
    header: 'Immediate and Progressive Results',
    content:
      "With a Thread Lift at Novacutis Clinic, you'll experience immediate improvements in your facial contours and skin tightness. As the threads naturally dissolve over time, they stimulate collagen production, leading to further enhancements. This means your results will continue to improve, leaving you with a refreshed and rejuvenated appearance that lasts.",
    id: 'immediate_and_progressive_results',
  },
  {
    img: safetyImg,
    header: 'Safety and Trust',
    content:
      "These threads are biocompatible, dissolvable, and have been used successfully in countless treatments worldwide. When you choose Novacutis Clinic, you're selecting a safe and proven solution for your cosmetic needs, backed by our unwavering commitment to your well-being.",
    id: 'safety_and_trust',
  },
];

export default function Services({ serviceId }) {
  const [counter, setCounter] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [swipe, setSwipe] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (serviceId) {
      const index = services.findIndex((e) => e.id == serviceId);
      if (index != -1) {
        setCounter(index);
      }
    }

    return () => {};
  }, [serviceId]);

  useEffect(() => {
    const textContainer = document.querySelector('.p-text-container');
    const readMore = document.querySelector('.read-more');
    setIsExpanded(false);

    if (textContainer.scrollHeight > textContainer.clientHeight) {
      readMore.classList.remove('hidden');
    } else {
      readMore.classList.add('hidden');
    }
  }, [counter, swipe]);

  return (
    <>
      <div
        ref={ref}
        className="mt-16 md:mt-28 px-4 md:px-0 md:w-4/5 justify-center m-auto select-none"
        id="serviceContainer"
      >
        {/* header */}
        <motion.p
          initial={{ x: '-5%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-poppins text-lg md:text-xl font-semibold leading-6 tracking-wider uppercase text-primary mb-2"
        >
          What We Offer
        </motion.p>
        <div className='hidden md:block'>
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ x: '-5%', opacity: 0 }}
              animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="mt-8 font-poppins text-xl md:text-4xl font-semibold leading-none md:leading-snug  text-header">
                {services[counter]['header']}
              </h1>
            </motion.div>

            <div className="space-x-4 hidden md:flex">
              <div
                className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => {
                  counter == 0
                    ? setCounter(services.length - 1)
                    : setCounter(counter - 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 text-white font-bold rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <div
                className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-primary flex items-center justify-center cursor-pointer"
                onClick={() => {
                  counter == services.length - 1
                    ? setCounter(0)
                    : setCounter(counter + 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 md:w-6 h-4 md:h-6 text-white font-bold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ x: '-20%', opacity: 0 }}
            animate={{ x: inView ? 0 : '-20%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 md:w-3/4 font-normal md:tracking-wide text-sm md:text-lg text-header"
          >
            <p
              className={`${
                isExpanded ? 'expanded' : 'collapsed line-clamp-3'
              } p-text-container`}
            >
              {services[counter]['content']}
            </p>
            <div className="h-8">
              <span
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
                className=" text-primary text-sm cursor-pointer read-more"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: '-15%', opacity: 0 }}
            animate={{ y: inView ? 0 : '-15%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 md:mt-12 flex items-center justify-center"
          >
            <img
              className="md:h-96"
              src={services[counter]['img']}
              alt="our services"
              width="auto"
              height="auto"
            />
          </motion.div>
        </div>

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          className="block md:hidden"
          interval={5000}
          onChange={() => setSwipe(!swipe)}
        >
          {services.map((e) => (
            <div key={e.id}>
              <motion.div
                initial={{ x: '-5%', opacity: 0 }}
                animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <h1 className="mt-8 font-poppins text-xl md:text-4xl font-semibold leading-none md:leading-snug  text-header">
                  {e['header']}
                </h1>
              </motion.div>

              <motion.div
                initial={{ x: '-20%', opacity: 0 }}
                animate={{ x: inView ? 0 : '-20%', opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 md:w-3/4 font-normal md:tracking-wide text-sm md:text-lg text-header text-left"
              >
                <p
                  className={`${
                    isExpanded ? 'expanded' : 'collapsed line-clamp-3'
                  } p-text-container`}
                >
                  {e['content']}
                </p>
                <div className="h-8">
                  <span
                    onClick={() => {
                      setIsExpanded(!isExpanded);
                    }}
                    className=" text-primary text-sm cursor-pointer read-more"
                  >
                    {isExpanded ? 'Read Less' : 'Read More'}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: '-15%', opacity: 0 }}
                animate={{ y: inView ? 0 : '-15%', opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 md:mt-12 flex items-center justify-center"
              >
                <img
                  className="md:h-96"
                  src={e['img']}
                  alt="our services"
                  width="auto"
                  height="auto"
                />
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
