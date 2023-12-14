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
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=c029b288c892f1adde32678375ba81d276d420a0189ead5f9240cc6b65bc8f4fgidb25cb8f8ef33e0e98888bcba5fc285e2914f53ba89ae01046e1cc758c882cba3gid534cb20477b1d28b5f45f7cc241888c5gid4ee3a7e9ace6ab1be7c541b329164307&tw=096a715cbfc30dc79d6dc215bf71c5b4284d938378e51186a6daa9337f7519a8"
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
