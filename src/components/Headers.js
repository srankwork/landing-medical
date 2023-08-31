// src/components/headers

import React from 'react';

const Header = () => {

  const handleScrollClick = () => {
    const container = document.getElementById('appointmentForm');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <div
        className="fixed top-1/2 right-0 cursor-pointer  mr-4 mt-4 z-40"
        role="button"
        tabIndex={0}
        onKeyDown={handleScrollClick}
        onClick={handleScrollClick}
      >
        <p className=" rotate-90 bg-primary rounded px-4 py-1 text-white origin-right">
          Book Appointment
        </p>
      </div>
      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/+917208330809"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-10 md:w-14 h-10 md:h-14"
            alt="whatsapp"
            width="auto"
            height="auto"
            src="https://tradebook.in.net/whatsapp.png"
          />
        </a>
      </div>
      <div className="my-2 md:my-4 px-4 md:px-10">
        <div className="container mx-auto flex items-center justify-between">
          <img
            src="https://www.novacutisclinics.com/assets/images/logo.png"
            alt="Logo"
            className="h-16 md:h-20"
            width="auto"
            height="auto"
          />

          <div className="bg-primary py-2 px-4 md:px-6 rounded-sm transition-all duration-500 font-semibold md:text-lg">
            <a href="tel:+917208330809" className="text-white ">
              Call us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
