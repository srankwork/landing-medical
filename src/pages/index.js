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
import Services from '../components/Services';
import ServiceList from '../components/serviceList';

const IndexPage = () => {
  const handleScrollClick = () => {
    const container = document.getElementById('appointmentForm');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full h-screen">
      <div className=" bg-secondry h-10 w-full text-center flex  items-center text-white justify-around">
        <span>
          <a
            href="tel:+917208330809"
            rel="noreferrer"
            className="font-semibold"
          >
            +91 7208330809
          </a>
        </span>
        <span className="flex items-center space-x-2">
          <a
            href="https://www.novacutisclinics.com/location"
            className="flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 22s-8-4.5-8-11a8 8 0 0116 0c0 6.5-8 11-8 11z"
              />
            </svg>
            <span className="text-white font-semibold ml-2">Locate us</span>
          </a>
        </span>
      </div>
      <Header />
      <HeroContainer />
      <Services />
      <ServiceIntroduction />
      <ResultContainer />
      <DoctorSction />
      <ServiceList/>
      <ReviewContainer />
      <BookAppointment />
      <AboutUs />
      <FaqContainer />
      <hr className="mt-10" />
      <div
        className="fixed top-1/2 right-4 cursor-pointer"
        onClick={handleScrollClick}
      >
        <svg
          className="w-12 h-12 bg-priary"
          fill="#9ECA3D"
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth="1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 10h16M4 14h16M10 6v4M14 6v4"
          />
        </svg>
      </div>
      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/+917208330809"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-14 h-14"
            alt="whatsapp"
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
