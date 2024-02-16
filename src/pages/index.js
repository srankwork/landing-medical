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
  return (
    <>
      <Helmet>
        <link rel="icon" href="https://rangeet.com/assets/img/favicon.png" />
        <title>Rangeet</title>
      </Helmet>
      <main className="w-full h-full">
        <Header />
        <HeroContainer />
        <AboutUs />
        <Services />
        <Rating />
        <ResultContainer />
        <VideoSteps />
        <ReviewContainer />
        <FaqContainer />
        {/* <BookAppointment /> */}
        <iframe aria-label='Learn More About Rangeet' frameborder="0" className='iframe' src='https://forms.zohopublic.in/dm10/form/FreeTrial1/formperma/iOo7khIm0PAG_deQtsqD4iFp3ABnbEpBvrQ0hYXUK1k'></iframe>
        <hr className="" />
        <script
          id="wf_anal"
          src="https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=f82b825d98c8f7305ca6548006b5c664eb9d65f4e1424f667aeddcd1c4cf0c4965146ee90e5f3d39f6b9a779400933c4gidd76e969dbb2b4c92f67eca8b8e66eb9644d6a9f4223b8f041b10550dbe9e97a6gid70ce19e355a56fbc33eb334b16ac0b3505f3b196700f2173184ef5319c656ac9gid0ee05e93cb68d6cc4327b98552ff7bfaf3b50be471e262c81e939dc30e03584b&tw=1ae29c5a3e5016680ec91d0265dd628e2aa297e6f9a8a3060a5169b3b5c63c51"
        ></script>

        <div className=" bg-primary w-full text-center flex flex-col text-white justify-center py-[20px] mt-16">
          <span>Copyright © 2023 Rangeet Pvt Ltd All Rights Reserved</span>
          <span className="pt-2 text-[12px] md:text-[16px]">
            All copyright and trademark rights in the mark Social Emotional &
            Ecological Knowledge (SEEK) are owned exclusively by Rangeet Private
            Limited and no use of the mark is permitted other than by express
            written approval.
          </span>
        </div>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Rangeet</title>;
