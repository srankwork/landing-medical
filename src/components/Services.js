import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import personalisedImg from '../image/photos/bg-1.png';
import progressiveImg from '../image/photos/bg-2.jpg';
import safetyImg from '../image/photos/bg-3.png';
import minimallyImg from '../image/photos/bg-2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const services = [
  {
    img: personalisedImg,
    header:'CONTENT PENDING',
    content:
      "We recognize that each individual is unique, and their cosmetic goals are as distinct as their features. That's why we prioritise personalised care. Your Thread Lift treatment will be carefully customised to your specific needs and goals. We work closely with you to ensure the results are not just noticeable but also natural-looking, enhancing your unique beauty.",
    id: 'personalised_care',
  },
  {
    img: minimallyImg,
    header:'CONTENT PENDING',
    content:
      ' Unlike traditional surgical facelifts, our procedure offers the benefits of reduced downtime and discomfort. You can return to your daily activities with minimal disruption to your routine while enjoying remarkable improvements in your appearance.',
    id: 'minimally_rnvasive_rxcellence',
  },
  {
    img: progressiveImg,
    header:'CONTENT PENDING',
    content:
      "With a Thread Lift at Novacutis Clinic, you'll experience immediate improvements in your facial contours and skin tightness. As the threads naturally dissolve over time, they stimulate collagen production, leading to further enhancements. This means your results will continue to improve, leaving you with a refreshed and rejuvenated appearance that lasts.",
    id: 'immediate_and_progressive_results',
  },
  {
    img: safetyImg,
    header:'CONTENT PENDING',
    content:
      "These threads are biocompatible, dissolvable, and have been used successfully in countless treatments worldwide. When you choose Novacutis Clinic, you're selecting a safe and proven solution for your cosmetic needs, backed by our unwavering commitment to your well-being.",
    id: 'safety_and_trust',
  },
];

export default function Services() {
  const [counter, setCounter] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [swipe, setSwipe] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    // const textContainer = document.querySelector('.p-text-container');
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
        className="mt-16 px-4 md:px-0 md:w-4/5 justify-center m-auto select-none"
        id="serviceContainer"
      >
       

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          className="block "
          interval={5000}
          onChange={() => setSwipe(!swipe)}
        >
          {services.map((e) => (
            <div key={e.id}>
             
              <motion.div
                initial={{ y: '-15%', opacity: 0 }}
                animate={{ y: inView ? 0 : '-15%', opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
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
