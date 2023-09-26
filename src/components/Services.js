import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import costImg from '../image/photos/cost.jpg';
import cuttingedgeImg from '../image/photos/cuttingedge.png';
import effectiveImg from '../image/photos/effective.jpg';
import quickImg from '../image/photos/quick.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const services = [
  {
    img: effectiveImg,
    header: 'Effective & Permanent',
    content:
      'Trained laser technicians use the latest safe and effective technology in laser hair removal to offer you the luxury of silky-smooth and ready-for-anything skin all year round!',
    id: 'effective_and_permanent',
  },
  {
    img: quickImg,
    header: 'Quick & Painless',
    content:
      'Time to ditch ancient practices of painful wax appointments and rushing with razors for a permanent laser solution. Although laser is fast, it can only treat your hair during the growth phase, so a series of 6-12 treatment sessions will be required before seeing those silky-smooth results.',
    id: 'quick_and_painless',
  },
  {
    img: costImg,
    header: 'Cost-Effective',
    content:
      "The treatment is tailored to an individual's needs to eradicate unwanted hair from the chosen area. Laser hair removal is affordable and cheaper than waxing in the long run.",
    id: 'cost-effective',
  },
  {
    img: cuttingedgeImg,
    header: 'Cutting-edge Technology',
    content:
      'Lasermach Technology stands at the forefront of advanced hair removal solutions. Leveraging cutting-edge laser precision, it delivers unmatched efficacy in eliminating unwanted hair, offering you the lasting results you desire. Experience the future of smooth, flawless skin with Lasermach.',
    id: 'cutting-edge_technology',
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
        className="mt-16 md:mt-28 px-4 md:px-0 md:w-4/5 justify-center m-auto select-none hidden md:block"
        id="serviceContainer"
      >
        {/* header */}
        <motion.p
          initial={{ x: '-5%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-poppins text-lg md:text-xl font-semibold leading-6 tracking-wider uppercase text-primary mb-2"
        >
          Laser Hair Removal with LasermachⓇ
        </motion.p>

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
      <div
        ref={ref}
        className="mt-16 md:mt-28 px-4 md:px-0 md:w-4/5  select-none block md:hidden"
        id="serviceContainer"
      >
        {/* header */}
        <motion.p
          initial={{ x: '-5%', opacity: 0 }}
          animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="font-poppins text-lg md:text-xl font-semibold leading-6 tracking-wider uppercase text-primary mb-2"
        >
          Laser Hair Removal with LasermachⓇ
        </motion.p>
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showArrows={false}
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
