import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const review = [
  {
    name: 'Brookings Institution',
    professional: 'Digital Tools for Real-Time Data Collection in Education',
    review:
      '“With the global education crisis and compounding challenges of COVID-19, it is now more critical than ever to make data-informed decisions toward achieving a range of equitable learning outcomes. Real-time data can help instructors, administrators, and even parents ensure that classrooms and learning spaces are managed adaptively to best serve learners. To accomplish this, it is necessary for data to be collected and presented: at the right time, with sufficient frequency, and to the right people in a way that is understandable and actionable.”',
  },
  {
    name: 'Dhruv Jayal',
    professional: 'Manager IT, Aasraa Trust, India',
    review:
      '“Running a program across various centres located in different geographical areas can prove to be quite a challenge. Rangeet organises all of their content and modules in one very easy to use application. The detailed summary of assessments as well as student feedback makes it very easy for us to monitor their progress and study the impact of the project on our children.”',
  },
  {
    name: 'Dilruba Khatun',
    professional:
      'Head Teacher, Dhadhash Govt Primary School, Rajshahi, Bangladesh',
    review:
      '“Rangeet was an excellent experience for me, helpful to bring positive change to teachers, students and society. I have been able to teach students not to discriminate owing to race, religion and colour. Rangeet empowers children to influence their families and in this way, they will play a positive role in changing all society.”',
  },
  {
    name: 'Elias Blinkoff',
    professional:
      'Graduate Student, Department of Psychology, Temple University, USA',
    review:
      '“Rangeet is a remarkable educational program. Its evidence-inspired approach helps children become kinder to themselves, society, and the world. Rangeet is also notable for its use of educational technology. By consulting the Rangeet app, teachers receive an array of instructional resources to promote student learning via hands-on activities. Lastly, Rangeet shows an impressive level of adaptability through its implementation across languages and cultures.”',
  },
  {
    name: 'Seema Venugopal',
    professional: 'Principal, Global Public School, Kochi, India',
    review:
      '“Rangeet provides different tools that help to effectively communicate with the students and understand things from their perspective. Through some music, fun-filled activities, roleplays, etc. it is easy to reach out to every kid in the classroom. It helps to inculcate values like how to be a good citizen and also creates awareness about rights and values. Positive values such as empathy, equality, diversity, inclusiveness, etc. are nurtured in the kids which will help them to overcome and break down the barriers of gender stereotyping, discrimination, etc. The detailed and well-structured lesson plans are easy to implement. Hats off to the Rangeet Team. You are making a difference!”',
  },
  {
    name: 'Kreeanne Rabadi',
    professional: 'Regional Director West, CRY – Child Rights and You, India',
    review:
      '“Rangeet provides teachers with a truly joyful and engaging way of working with children. With lessons focused on mindfulness, empathy, anti-bullying, gender equity and building an appreciation for nature – it enables children to face the world with confidence and to make better choices, especially in these challenging times. Our teachers and children have thoroughly enjoyed the teaching learning process through this easy and interactive app, which importantly includes impact measurement.”',
  },
  {
    name: 'Laxmi Munda',
    professional: 'Teacher, Government Middle School Bariatu, Ranchi, India',
    review:
      '“I have a lot of experience as a teacher. When Rangeet was introduced to me, I found a lot of solutions to my problems from it. I would like to thank Rangeet and apply the solutions it offers in my family, my class and society.”',
  },
  {
    name: 'Neelu Khanna',
    professional: 'Trustee Aasraa Trust, Dehradun, India',
    review:
      '“At Aasraa Trust we implemented Rangeet in 6 government schools that we partner at with the Government of Uttarakhand, impacting 315 children. This is an exemplary learning system imparting life skills and values, with a logically designed curriculum, teaching plans and assessments making it a veritable storehouse for educationists. And all this with a user-friendly app! The coaching and mentoring support given by the team at Rangeet is in depth and available 24 x 7.”',
  },
];
const Testimonial = ({ review, userName, professional }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[80vw] border-[1px] border-solid border-black rounded-xl p-[40px]">
        <div>
          <p className="capitalize text-lg font-semibold text-[#212529]">
            {userName}
          </p>
          <span className="capitalize text-sm md:text-base font-medium text-[#212529]">
            {professional}
          </span>
        </div>
        <p className="text-[#212529] mt-8 md:mt-12  font-normal text-base md:text-lg leading-snug tracking-tight h-[480px] md:h-[150px]">
          {review}
        </p>
      </div>
    </div>
  );
};

const ReviewContainer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [counter, setCounter] = useState(0);


  useEffect(() => {

  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="mt-12 md:mt-24 pt-14 md:pt-14 pb-14  select-none overflow-hidden"
    >
      <h1 className="text-center uppercase text-3xl md:text-5xl font-semibold leading-tight tracking-tighter text-primary">
        Testimonials
      </h1>

      <div className="mt-8 md:mt-16 testimonial-container">
        <Testimonial
          review={review[counter]['review']}
          userName={review[counter]['name']}
          professional={review[counter]['professional']}
        />
      </div>
      <div className="space-x-4 hidden md:flex justify-center mt-8 gap-[20px]">
        <div
          className="rounded-full w-8 md:w-10 h-8 md:h-10 bg-background flex items-center justify-center cursor-pointer"
          onClick={() => {
            counter == 0
              ? setCounter(review.length - 1)
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
            counter == review.length - 1
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
      <div className="mt-12 flex items-center justify-center">
        <div className="h-[300px] md:h-[400px] w-[800px] flex justify-center items-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/h-8bkv6qMKc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewContainer;
