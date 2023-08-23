import React from 'react';
const DoctorSction = () => {
  return (
    <>
      <section className="relative md:flex bg-doctor-info mt-14 md:mt-28">
        {/* Background Image */}
        <div
          className="w-full md:w-1/2 h-screen bg-cover bg-no-repeat bg-center flex flex-col"
          style={{
            backgroundImage: `url(https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Roll-large-Img-1.webp)`,
          }}
        >
          <div className="bg-white p-4 w-1/2 mt-auto m-10">
            <h1>
              <span className="font-semibold text-red-500">
                Dr.JoeThomastellus
              </span>{' '}
              Eu Odio Bibendum Aliquam Volutpat Massa In BestDoctormentum.
              Nullam Varius Libero Id Odio
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-10 text-black flex flex-col justify-center items-start h-screen m-auto leading-128">
          <p className="font-semibold tracking-widest uppercase text-primary-color">
            Hair - Trasplant Surgon
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-128 font-montserrat text-black mt-4">
            JOE THOMAS - <span className="text-primary-color">PHD</span>
          </h1>
          <p className="mt-6">
            Dliquam magna massa, gravida finibus fermen Suspe ndisse consequat
            lacus libero. In ultrici Maecenatis.
          </p>

          {/* List of Pointers */}
          <ul class="list-none p-0 md:mt-12">
            <li class="mb-4 md:mb-8 flex items-center group hover:text-red-500 transition-transform transform hover:translate-x-2 cursor-default text-xl">
              <span class="pointer mr-4 inline-block w-4 h-0.5 bg-black group-hover:bg-red-500"></span>{' '}
              HAIR TRASPLANT
            </li>
            <li class="mb-4 md:mb-8 flex items-center group hover:text-red-500 transition-transform transform hover:translate-x-2 cursor-default text-xl">
              <span class="pointer mr-4 inline-block w-4 h-0.5 bg-black group-hover:bg-red-500"></span>{' '}
              PLASTIC SURGERY
            </li>
          </ul>

          <div className="flex w-full space-x-10 h-20">
            <img className='w-1/2 h-20' src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Brand-Img-2.webp" />
            <img className='w-1/2 h-20' src="https://sirpi.wpengine.com/wp-content/uploads/2023/05/Sirpi-Brand-Img-1.webp" />
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorSction;
