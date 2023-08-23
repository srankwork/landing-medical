// src/components/headers

import React from 'react';

const Header = () => {
  return (
    <div className='my-6 mx-4 md:mx-10'>
      <div className='container mx-auto flex items-center justify-between'>
        <img
          src='https://sirpi.wpengine.com/wp-content/uploads/2023/05/Logo-main.svg'
          alt='Logo'
          className='h-14 md:h-16'
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
        <div className='bg-appointment-btn py-2 px-4 rounded-sm transition-all duration-500 hover:bg-amber-900'>
          <a href='#' className='text-white '>
            Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
