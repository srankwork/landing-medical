import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h1 className="mt-3 font-poppins text-4xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        About Us
      </h1>
      <div className="mt-8 flex items-center justify-center">
        <img
          src="https://www.novacutisclinics.com/assets/images/logo.png"
          className=" h-32 md:h-60"
        />
      </div>
      <div className="flex justify-center items-center">
        <p class="px-4 md:w-3/4 text-center mt-4 md:mt-10 font-normal md:tracking-wide text-sm md:text-lg text-header">
          Dr. Prachi Patel's Novacutis Skin, Hair Transplant & Cosmetic Clinic
          is an advanced medical facility equipped with international US
          FDA-approved machines, located in the heart of Mumbai providing a wide
          range of dermatological & aesthetic solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
