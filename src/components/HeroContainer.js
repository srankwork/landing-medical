import React from 'react';
const HeroContainer = () => {
  const handleScrollClick = () => {
    const container = document.getElementById('appointmentForm');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <div>
      <div className=" bg-background lg:flex lg:justify-center lg:items-center">
        <div className="lg:w-1/2 p-6 order-2 lg:order-1">
          <p className="font-poppins text-base md:text-base font-semibold leading-6 tracking-wider uppercase text-primary mb-2">
            Hair - Trasplant
          </p>
          <h1 className="mt-1 font-poppins text-4xl md:text-5xl font-semibold leading-none md:leading-snug  text-header">
            Get the hair you've always dreamed of!
          </h1>
          <p className="mt-3 text-lightblue font-poppins text-base md:text-xl  leading-snug font-medium">
            Lastest Hair Transplant Techniques at Novacutis Clinic
          </p>
          <button onClick={handleScrollClick} className="mt-8 flex items-center border-2 border-primary text-primary bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm">
            Schedule Appointment
          </button>
        </div>

        <div className="hidden md:block lg:w-1/2 order-1 lg:order-2">
          <img
            src="https://img.freepik.com/premium-photo/head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become-shaggy-advertising-poster-hair-transplant-clinic-treatment-baldness_168410-1887.jpg?w=1060"
            alt="Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
