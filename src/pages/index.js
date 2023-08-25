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
    <main className="w-full h-screen animate-fade-in ">
      <div className=" bg-secondry h-10 w-full text-center flex  items-center text-white justify-around">
        <span>
          <a href="tel:+917208330809" className="font-semibold">
            +91 7208330809
          </a>
        </span>
        <span class="flex items-center space-x-2">
          <a
            href="https://www.novacutisclinics.com/location"
            className="flex items-center"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 22s-8-4.5-8-11a8 8 0 0116 0c0 6.5-8 11-8 11z"
              />
            </svg>
            <span class="text-white font-semibold ml-2">Locate us</span>
          </a>
        </span>
      </div>
      <Header />
      <HeroContainer />
      <BookAppointment />
      <ServiceIntroduction />
      <ResultContainer />
      <DoctorSction />
      <AboutUs />
      <ReviewContainer />
      <FaqContainer />
      <hr className="mt-10" />

      <div class="fixed bottom-4 right-4">
        <a
          href="https://wa.me/+917208330809"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-14 h-14"
            src="https://tradebook.in.net/whatsapp.png"
          />
        </a>
      </div>
      <div className=" bg-primary h-10 w-full text-center flex flex-col text-white justify-center">
        <span>©2023</span>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
