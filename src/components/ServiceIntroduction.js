import React, { useEffect } from 'react';

const ServiceIntroduction = () => {
  const serviceList = [
    'Bio Integrated Fue',
    'Female Hair Transplant',
    'Beard & Moustache Transplant',
    'Body to Head Hair Transplant',
    'Eyebrow Transplant',
    'L3 Plasma Grow',
  ];

  return (
    <section className="relative md:flex bg-appointment-btn mt-14 md:mt-28">
      <div
          className=" hidden md:block w-80 md:w-1/2 h-96 md:h-screen bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(https://plastic-surgeon.abelle.themerex.net/wp-content/uploads/2022/06/background-1-copyright.jpg)`,
          }}
        >
        </div>
      
      <div className="w-full md:w-1/2 p-10 text-white">
        <p className="font-semibold tracking-widest uppercase text-white">
          What we do
        </p>
        <div
          className="block md:hidden mt-2 md:w-1/2 h-60 md:h-screen bg-cover bg-no-repeat bg-center relative"
          style={{
            backgroundImage: `url(https://plastic-surgeon.abelle.themerex.net/wp-content/uploads/2022/06/background-1-copyright.jpg)`,
          }}
        ></div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-128 font-montserrat mt-4">
          Advance Hair Trasplant
        </h1>
        <p className="mt-4 md:mt-6 text-lg">
          Kurabitur suscipit nulla neque, ut laor eet erat sodales vel.
          Curabitur vitae tortor eu felis scelerisque varius a non. Curabitur et
        </p>

        <div className="w-full h-1 mt-12">
          <div className="w-full h-full bg-transparent animate-dashed-line" />
        </div>

        <ul class="list-none p-0 md:mt-0">
          {serviceList.map((e) => (
            <li
              key={e}
              class="mb-4 md:mb-6 flex items-center group hover:text-red-500 transition-transform transform hover:translate-x-2 cursor-default text-xl"
            >
              <span class="pointer mr-4 inline-block w-4 h-0.5 bg-white group-hover:bg-red-500"></span>{' '}
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceIntroduction;
