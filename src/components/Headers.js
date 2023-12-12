// src/components/headers

import React, { useState } from 'react';
import logo from '../image/Icons/logorang.png'

const Header = () => {
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
            <a href="tel:+919152128731" className="text-white ">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
