import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import enhance from '../image/photos/Enhance.jpg';
import solution from '../image/photos/Ultimate solution.jpg';
import advance from '../image/photos/Advanced.jpg';
import fue from '../image/photos/FUE.jpg';
import bio from '../image/photos/BIO FUE.png';
import complementary from '../image/photos/Complementary.jpeg';
import prp from '../image/photos/PRP.jpg';
import meso from '../image/photos/meso.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const services = [
  {
    img: solution,
    header: 'The ultimate solution for hair loss',
    id: 'The ultimate solution for hair loss',
    content:
      'The hair transplant procedure relocates follicles from one part of the body (usually the back of the head) to bald or thinning areas, treating pattern baldness and enhancing eyebrows, lashes, beard, and more.',
  },
  {
    img: enhance,
    header: 'Enhance your facial features',
    id: 'enhance_your_facial_features',
    content:
      'With meticulous precision, our skilled team implants individual hair follicles, creating beautifully defined eyebrows or a fuller, more masculine beard.',
  },
  {
    img: advance,
    id: 'advance_techniques',
    header: 'Advanced Techniques',
    content:
      'Novacutis Clinic by Dr. Prachi offers a wide range of advanced techniques to battle hair loss like mesotherapy, Hair Rejuvenating Therapy for hair, 2nd gen FUE and 3rd gen BIO FUE to name a few. Follicular Unit Extraction (FUE) is the industry standard technique used around the world. BIO FUE is a more efficient and advanced technique for hair transplant.',
  },
  {
    img: fue,
    header: '2nd Gen FUE',
    id: '2nd_gen_FUE',
    content:
      'Follicular Unit Extraction (FUE) involves extracting individual hair follicles from donor areas and implanting them in the target region, leaving no visible scars.',
  },
  {
    img: bio,
    header: '3rd Gen BIO FUE',
    id: '3rd_gen_bio_fue',
    content:
      "The revolutionary BIO FUE (Bioenhanced Follicular Unit Extraction) technique for hair transplant, takes the benefits of traditional FUE a step further by enriching the extracted follicles with growth factors from your blood, enhancing their survival rate and promoting robust hair growth. This cutting-edge approach ensures not only natural-looking results but also accelerated healing and impressive hair density. With BIO FUE, you're not just restoring hair; you're optimizing your hair's potential.",
  },
  {
    img: complementary,
    header: 'Complementing Haircare Therapy',
    id: 'complementing_haircare_therapy',
    content:
      'In addition to our advanced hair transplant techniques, we offer a range of effective services that work in harmony to maximise your hair transplant results. Hair Rejuvenating Therapy, DermaPen treatment, and Hair Mesotherapy are all powerful methods that stimulate hair growth, enhance blood circulation, and promote overall hair health. When combined with our cutting-edge hair transplant procedures, these services create a synergy that ensures you achieve the most natural-looking and long-lasting results possible',
  },
  {
    img: prp,
    header: 'Hair Rejuvenating Therapy',
    id: 'hair_rejuvenating_therapy',
    content:
      'Hair Rejuvenating Therapy involves harnessing the regenerative potential of your own blood, concentrating growth factors, and injecting them into the scalp. This holistic approach stimulates dormant hair follicles, promoting hair growth and thickness. The procedure is virtually painless and requires no downtime, making it an excellent complement to hair transplant techniques like FUE and BIO FUE.',
  },
  {
    img: meso,
    header: 'Hair Meso Therapy',
    id: 'mesotherapy',
    content:
      'This non-invasive technique involves micro-injections of a specialized cocktail of vitamins, minerals, and growth factors directly into the scalp. These essential nutrients rejuvenate hair follicles, stimulate hair growth, and improve overall hair quality. Hair Meso Therapy is a gentle yet powerful solution that enhances blood circulation and nourishes your scalp, leading to healthier and more vibrant hair. With minimal discomfort and no downtime, you can achieve a revitalized head of hair that boosts your confidence.',
  }
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
        <div className="hidden md:block">
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
