import React from 'react';
const BookAppointment = () => {
  return (
    <div className='mx-10 mt-14 md:mt-28'>
      <h1 className='block md:hidden text-2xl md:text-3xl font-poppins font-semibold leading-tight tracking-tight text-header'>
        Book Your Appointment
      </h1>
      <div className='md:flex md:space-x-4 mt-6 md:mt-14'>
        <div className='md:w-3/4'>
          <form>
            <div className='md:flex md:space-x-4  mb-0 md:mb-8'>
              <div className='mt-2 md:w-1/2'>
                <input
                  type='text'
                  className='border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder'
                  placeholder='NAME'
                />
              </div>
              <div className='mt-2 md:w-1/2'>
                <input
                  type='text'
                  className='border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder'
                  placeholder='REASON FOR APPOINTMENT'
                />
              </div>
            </div>
            <div className='mb-4 md:flex md:space-x-4'>
              <div className='mt-2 md:w-1/3'>
                <input
                  type='text'
                  className='border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder'
                  placeholder='YOUR EMAIL'
                />
              </div>
              <div className='mt-2 md:w-1/3'>
                <input
                  type='text'
                  className='border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder'
                  placeholder='DATE & TIME'
                />
              </div>
              <div className='mt-2 md:w-1/3'>
                <input
                  type='text'
                  className='border-b-4 border-border border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-placeholder'
                  placeholder='TREATMENT TYPE'
                />
              </div>
            </div>
          </form>
        </div>
        <div className='md:w-1/4 mt-12 md:mt-0 items-center flex flex-col justify-center'>
          <div className='hidden md:flex  justify-center items-center'>
            <img
              src='https://www.novacutisclinics.com/assets/images/logo.png'
              className=' h-14 md:h-16 mr-2'
            />
            <h1 className='text-2xl md:text-2xl font-poppins font-semibold leading-tight tracking-tight text-header text-center mb-6'>
              Book Your Appointment
            </h1>
          </div>
          <div className='w-full bg-primary py-2 px-6 rounded-sm transition-all duration-500 font-semibold text-lg text-center'>
            <a href='#' className='text-white'>
              Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
