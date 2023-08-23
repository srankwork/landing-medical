import React from 'react';

const AboutUs = () => {
  return (
    <div class=' md:w-3/4 mt-8 md:mt-16 mx-auto'>
      <h1 className='mt-4 text-2xl md:text-5xl font-semibold leading-128 font-montserrat text-center'>
        About Us
      </h1>
      <div className='m-4 md:mt-12'>
        <img
          src='https://img.freepik.com/premium-photo/head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become-shaggy-advertising-poster-hair-transplant-clinic-treatment-baldness_168410-1887.jpg?w=1060'
          alt='Image Description'
          class='rounded-sm w-full md:w-2/3 md:h-80 m-auto'
        />
        <p class='mt-4 md:mt-10 font-normal md:tracking-wide text-sm md:text-lg text-black'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula
          massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci
          nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl
          sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae,
          consequat in, pretium a, enim. Pellentesque congue. Ut in risus
          volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
          Praesent egestas leo in pede. Praesent blandit odio eu enim.
          Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posu
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
