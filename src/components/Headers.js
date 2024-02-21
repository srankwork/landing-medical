// src/components/headers

import React, { useState } from 'react';
import logo from '../image/Icons/logorang.png'

const Header = () => {
 const scrollToDiv = () => {
    const targetDiv = document.getElementById('appointmentForm');

    if (targetDiv) {
      window.scrollTo({
        top: targetDiv.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <>
      <div className="my-2 md:my-4 px-4 md:px-10">
        <div className="mx-auto flex items-center justify-between">
          <img
            src={logo}
            alt="Logo"
            className="h-10"
            width="auto"
            height="auto"
          />

          <div className=" bg-background py-2 px-4 md:px-6 rounded-2xl transition-all duration-500 font-semibold text-sm md:text-lg">
            <a href="#" onClick={()=>scrollToDiv()} className="text-white ">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
