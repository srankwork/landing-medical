import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
// import video from '../image/photos/about_us.mp4';

const AboutUs = () => {
  const videoRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    // const video = videoRef.current;
    // if (video) {
    //   video.addEventListener('loadedmetadata', () => {
    //     video.currentTime = 1;
    //   });
    // }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-background pt-8 md:pt-16 pb-16"
    >
      <h1 className="mt-3 font-poppins text-4xl font-semibold leading-tight tracking-tighter text-black text-center">
        ABOUT US
      </h1>
      <div className="mt-8 md:mt-12 flex items-center justify-center">
        {/* <video ref={videoRef} controls className="rounded-sm">
          <source src={video} type="video/mp4" />
        </video> */}
        <div className=" bg-secondry h-[300px] w-[500px]  items-center flex justify-center">
          {' '}
          Ad Video
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="px-4 md:w-3/4 text-center mt-8 md:mt-10 font-normal md:tracking-wide text-sm md:text-lg text-header">
          Rangeet is a digital platform for authoring, delivering and measuring
          the impact of teaching materials for schools, communities and
          families. It features Rangeet’s proprietary Social Emotional and
          Ecological Knowledge (SEEK)© curriculum and teaching resources.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutUs;
