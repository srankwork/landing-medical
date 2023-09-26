import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import rediscoverImg from '../image/photos/rediscover.png';
import LipsImg from '../image/photos/lips.jpg';
import completelyImg from '../image/photos/completely.jpg';
import forheadImg from '../image/photos/forhead.png';
import economicalImg from '../image/photos/economical.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const services = [
  {
    img: rediscoverImg,
    header: 'Rediscover your beauty',
    content:
      "Experience rejuvenation in various facial regions, where subtle enhancements can help you recapture your youthful glow. Our carefully administered treatments target specific areas, resulting in smoother, refreshed skin and a revitalized appearance. Whether it's lip augmentation or lines around the eyes, forehead creases, or crow's feet, our techniques provide a tailored touch to bring out your best self.",
    id: 'rediscover_your_beauty',
  },
  {
    img: LipsImg,
    header: 'Get Luscious Lips',
    content:
      "Whether you're looking to restore lost volume, balance asymmetry, or simply achieve a more youthful pout, lip fillers offer a customizable solution tailored to your unique features and preferences. Say goodbye to fine lines and hello to a plumper pout in just a 30-minute procedure.",
    id: 'get_luscious_lips',
  },
  {
    img: forheadImg,
    header: 'Treat your forehead wrinkles',
    content:
      'The premier injectable muscle relaxer gently diminishes facial wrinkles. With FDA approval dating back to 1989, supported by a 2016 clinical study, this treatment proves simple and effective for reducing forehead wrinkles.',
    id: 'treat_your_forehead_wrinkles',
  },
  {
    img: completelyImg,
    header: 'Completely Safe',
    content:
      'Say goodbye to wrinkles with our safe, effective, and minimally invasive treatment administered by internationally certified technicians who have the experience to deliver wrinkle-free perfection.',
    id: 'completely_safe',
  },
  {
    img: economicalImg,
    header: 'Economical Transformation',
    content:
      'Experience a youthful transformation without worrying about a costly procedure. Novacutis Clinic offers the best anti-wrinkle treatments in Mumbai at a very affordable cost.',
    id: 'economical_transformation',
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
          What We Offer
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
          What We Offer
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
