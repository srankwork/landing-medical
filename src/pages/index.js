import React, { useState } from 'react';
import Header from '../components/Headers';
import HeroContainer from '../components/HeroContainer';
import BookAppointment from '../components/AppointmentBook';
import { Helmet } from 'react-helmet';
import ResultContainer from '../components/Result';
import VideoSteps from '../components/VideoSteps';
import ReviewContainer from '../components/Reviews';
import AboutUs from '../components/AboutUs';
import FaqContainer from '../components/Faq';
import Services from '../components/Services';
import Rating from '../components/Rating';

const IndexPage = () => {
  

  function changeServiceId(id) {
    const container = document.getElementById('serviceContainer');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
   
  }

  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href="https://rangeet.com/assets/img/favicon.png"
        />
        <title>Rangeet</title>
      </Helmet>
      <main className="w-full h-full">
        {/* <div className=" bg-primary h-10 w-full text-center flex  items-center text-white justify-around">
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
              href="https://play.google.com/store/apps/details?id=com.projectrangeet.app"
              className="flex items-center"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-white font-semibold ml-2">
                Download App
              </span>
            </a>
          </span>
        </div> */}
        <Header />
        <HeroContainer />
        <Rating />
        <Services />
        <ResultContainer />
        <VideoSteps />
        <ReviewContainer />
        <BookAppointment />
        <AboutUs />
        <FaqContainer />
        <hr className="mt-16" />
        <script
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f82b825d98c8f7305ca6548006b5c664eb9d65f4e1424f667aeddcd1c4cf0c4965146ee90e5f3d39f6b9a779400933c4gidd76e969dbb2b4c92f67eca8b8e66eb9644d6a9f4223b8f041b10550dbe9e97a6gid70ce19e355a56fbc33eb334b16ac0b3505f3b196700f2173184ef5319c656ac9gid0ee05e93cb68d6cc4327b98552ff7bfaf3b50be471e262c81e939dc30e03584b&tw=1ae29c5a3e5016680ec91d0265dd628e2aa297e6f9a8a3060a5169b3b5c63c51"
        ></script>

        <div className=" bg-primary h-10 w-full text-center flex flex-col text-white justify-center">
          <span>©2023</span>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Rangeet</title>;
