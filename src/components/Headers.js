// src/components/headers

import React from 'react';

const Header = () => {
  return (
    <div className="mt-8 px-4 md:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="https://www.novacutisclinics.com/assets/images/logo.png"
          alt="Logo"
          className="h-16 md:h-20"
        />

        {/* <div className='hidden md:flex space-x-4'>
          <a
            href='/'
            className='text-black hover:bg-black hover:text-white px-3 py-2 rounded-md transition-all duration-300'
          >
            Home
          </a>
          <a
            href='/about'
            className='text-black hover:bg-black hover:text-white px-3 py-2 rounded-md transition-all duration-300'
          >
            About
          </a>
          <a
            href='/contact'
            className='text-black hover:bg-black hover:text-white px-3 py-2 rounded-md transition-all duration-300'
          >
            Contact
          </a>
        </div> */}
        <div className="bg-primary py-2 px-4 md:px-6 rounded-sm transition-all duration-500 font-semibold md:text-lg">
          <a href="tel:+917208330809" className="text-white ">
            Call us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
