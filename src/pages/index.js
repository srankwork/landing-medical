import * as React from 'react';
import Header from '../components/Headers';
import HeroContainer from '../components/HeroContainer';
import ServiceIntroduction from '../components/ServiceIntroduction';
import BookAppointment from '../components/AppointmentBook';
import DoctorSction from '../components/DoctorInfo';
import ResultContainer from '../components/Result';
import ReviewContainer from '../components/Reviews';
import AboutUs from '../components/AboutUs';
import FaqContainer from '../components/Faq';

const IndexPage = () => {
  return (
    <main className='w-full h-screen animate-fade-in'>
      <Header />
      <HeroContainer />
      <BookAppointment />
      <ServiceIntroduction />
      <ResultContainer />
      <DoctorSction />
      <AboutUs />
      <ReviewContainer />
      <FaqContainer />
      <hr className='mt-10' />
      <div
        id='scroll-container'
        className=' bg-appointment-btn h-10 w-full text-center flex flex-col text-white justify-center'
      >
        <span>©2023</span>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
