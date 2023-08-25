import React from 'react';

const AboutUs = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h1 className="mt-3 font-poppins text-4xl md:text-6xl font-semibold leading-tight tracking-tighter text-header text-center">
        About Us
      </h1>
      <div className="mt-8 flex items-center justify-center">
        <img src="https://www.novacutisclinics.com/assets/images/logo.png" className=' h-32 md:h-60' />
      </div>
      <div className="flex justify-center items-center">
        <p class="px-4 md:w-3/4 text-center mt-4 md:mt-10 font-normal md:tracking-wide text-sm md:text-lg text-header">
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
