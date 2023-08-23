import React from 'react';
const BookAppointment = () => {
  return (
    <div className="mx-10 mt-14 md:mt-28">
      <h1 className="block md:hidden text-2xl md:text-3xl font-semibold leading-128 font-montserrat text-center">
        Book Your Appointment
      </h1>
      <div className="md:flex md:space-x-4 mt-6 md:mt-14">
        <div className="md:w-3/4">
          <form>
            <div className="md:flex md:space-x-4  mb-0 md:mb-8">
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className="border-b-2 border-red-400 border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-gray-400"
                  placeholder="NAME"
                />
              </div>
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className="border-b-2 border-red-400 border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-gray-400"
                  placeholder="REASON FOR APPOINTMENT"
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:space-x-4">
              <div className="mt-2 md:w-1/3">
                <input
                  type="text"
                  className="border-b-2 border-red-400 border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-gray-400"
                  placeholder="YOUR EMAIL"
                />
              </div>
              <div className="mt-2 md:w-1/3">
                <input
                  type="text"
                  className="border-b-2 border-red-400 border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-gray-400"
                  placeholder="DATE & TIME"
                />
              </div>
              <div className="mt-2 md:w-1/3">
                <input
                  type="text"
                  className="border-b-2 border-red-400 border-opacity-40 outline-none font-semibold py-2 w-full uppercase font-montserrat leading-2 placeholder-gray-400"
                  placeholder="TREATMENT TYPE"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="md:w-1/4 mt-12 md:mt-0 ">
          <h1 className="hidden md:block text-2xl md:text-3xl font-semibold leading-128 font-montserrat text-center mb-6">
            Book Your Appointment
          </h1>
          <div className="bg-appointment-btn text-center py-2 px-4 rounded-sm transition-all duration-500 hover:bg-amber-900">
            <a href="#" className="text-white text-center">
              BOOK SLOT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
