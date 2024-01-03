import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import builtforteachersImg from '../image/photos/builtforshcools.jpg';
import seekImg from '../image/photos/seek.png';
import realtimeassImg from '../image/photos/realtimeass.png';
import performancedashboardImg from '../image/photos/performancedashboard.jpg';
import holisticandglobalImg from '../image/photos/holisticandglobal.png';
import scalableImg from '../image/photos/scalable.png';
import universalApproach from '../image/photos/universal-approach.jpg';
import unsdgImg from '../image/photos/unsdg.png';
import learningCicleImage from '../image/photos/learning-cicle-image.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const services = [
  {
    img: builtforteachersImg,
    header: 'BUILT FOR TEACHERS',
    content:
      'Rangeet can help improve attendance, enrollment, retain teachers and improve grades. Schools and community centres observe greater attendance on days Rangeet is taught.',
  },
  {
    img: seekImg,
    header: 'PROPRIETARY SEEK™ CURRICULUM',
    content:
      'Social Emotional and Ecological Knowledge (SEEK)© uses active, playful teaching methods to prepare children for the challenges of the future.',
  },
  {
    img: holisticandglobalImg,
    header: 'HOLISTIC AND GLOBAL EDUCATION',
    content:
      'Through human-centric design and collaboration with diverse educators around the world, an easy-to-use app has been created, solving problems faced by communities around the world.',
  },
  {
    img: realtimeassImg,
    header: 'REAL TIME ASSESSMENT',
    content:
      'Rangeet uses a built-in mechanism to measure, monitor and assess impact of the program in real-time and collect iterative feedback from facilitators and children.',
  },
  {
    img: performancedashboardImg,
    header: 'PERFORMANCE DASHBOARD',
    content:
      'Administrators can use data visualisation and evaluation tools to manage implementations and monitor impact, informing timely decisions and adaptations.',
  },
  {
    img: scalableImg,
    header: 'SCALABLE, AFFORDABLE, ACCESSIBLE',
    content:
      'Only one device, used by the facilitator, is needed to teach, collect and submit data. It’s also adaptable to language and cultural contexts and requires minimal time and resources to be able to teach.',
  },
  {
    img: unsdgImg,
    header: 'DESIGNED AROUND THE UN SDGs',
    content:
      "Each of Rangeet’s activities is tagged based on the particular SDGs it assists the facilitator to teach. Accessing these activities through the curriculum or through search functionality places a powerful SDG teaching toolkit in the hands of facilitators anywhere.",
  },
  {
    img: learningCicleImage,
    header: 'learning-science based approach',
    content:
      "Active pedagogies and the application of multiple intelligences theory include every learner.\n\n Activities are searchable to help educators:",
  },
  {
    img: universalApproach,
    header: 'Universal Appeal',
    content:
      "Rangeet encourages facilitators to bring their lived experiences, cultures and contexts into teaching.\nChildren’s identities and experiences are mirrored in original activities, which also serve as windows, making unknown worlds accessible, encouraging different viewpoints.",
  },
];
;

export default function Services() {
  const [counter, setCounter] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [swipe, setSwipe] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    // const textContainer = document.querySelector('');
    // const readMore = document.querySelector('.read-more');
    // setIsExpanded(false);

    // if (textContainer.scrollHeight > textContainer.clientHeight) {
    //   readMore.classList.remove('hidden');
    // } else {
    //   readMore.classList.add('hidden');
    // }
  }, [counter, swipe]);

  return (
    <>
      <div
        ref={ref}
        className="mt-16 md:mt-24 px-4 md:px-0 md:w-4/5 justify-center m-auto select-none"
        id="serviceContainer"
      >
        <div className="hidden md:block">
          <div className="flex justify-center items-center">
            <motion.div
              initial={{ x: '-5%', opacity: 0 }}
              animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="mt-8 text-center uppercase text-xl md:text-4xl font-semibold leading-tight tracking-tighter text-primary">
                {services[counter]['header']}
              </h1>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: '-20%', opacity: 0 }}
            animate={{ x: inView ? 0 : '-20%', opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 font-normal md:tracking-wide text-sm md:text-lg text-header"
          >
            <p
              className={`expanded text-center`}
            >
              {services[counter]['content']}
            </p>
            {/* <div className="h-8">
              <span
                onClick={() => {
                  setIsExpanded(!isExpanded);
                }}
                className=" text-primary text-sm cursor-pointer read-more"
              >
                {isExpanded ? 'Read Less' : 'Read More'}
              </span>
            </div> */}
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

          <div className="space-x-4 hidden md:flex justify-center mt-8 gap-[20px]">
            <div
              className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-background flex items-center justify-center cursor-pointer"
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
              className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-background flex items-center justify-center cursor-pointer"
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
            <div key={`${e.id}-service`}>
              <motion.div
                initial={{ x: '-5%', opacity: 0 }}
                animate={{ x: inView ? 0 : '-5%', opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h1 className="mt-8 uppercase text-xl md:text-4xl font-semibold leading-none md:leading-snug  text-primary">
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
                  className={`collapsed line-clamp-3 text-center`}
                >
                  {e['content']}
                </p>
                
              </motion.div>

              <motion.div
                initial={{ y: '-15%', opacity: 0 }}
                animate={{ y: inView ? 0 : '-15%', opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 md:mt-12 flex items-center justify-center"
              >
                <img
                  className=" h-64 md:h-96 object-fill "
                  src={e['img']}
                  alt="our services"
                />
              </motion.div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
