import React from 'react';
const HeroContainer = () => {
  // const listOfKnowMore = [
  //   {
  //     header: 'The ultimate solution for hair loss',
  //     content:
  //       'The hair transplant procedure relocates follicles from one part of the body (usually the back of the head) to bald or thinning areas, treating pattern baldness and enhancing eyebrows, lashes, beard, and more.',
  //   },
  //   {
  //     header: 'Enhance your facial features',
  //     content:
  //       'With meticulous precision, our skilled team implants individual hair follicles, creating beautifully defined eyebrows or a fuller, more masculine beard.',
  //   },
  //   {
  //     header: 'Advanced Techniques',
  //     content:
  //       'Novacutis Clinic by Dr. Prachi offers a wide range of advanced techniques to battle hair loss like mesotherapy, PRP treatment for hair, 2nd gen FUE and 3rd gen BIO FUE to name a few. Follicular Unit Extraction (FUE) is the industry standard technique used around the world. BIO FUE is a more efficient and advanced technique for hair transplant.',
  //   },
  //   {
  //     header: '2nd Gen FUE',
  //     content:
  //       'Follicular Unit Extraction (FUE) involves extracting individual hair follicles from donor areas and implanting them in the target region, leaving no visible scars.',
  //   },
  //   {
  //     header: '3rd Gen BIO FUE',
  //     content:
  //       "The revolutionary BIO FUE (Bioenhanced Follicular Unit Extraction) technique for hair transplant, takes the benefits of traditional FUE a step further by enriching the extracted follicles with growth factors from your blood, enhancing their survival rate and promoting robust hair growth. This cutting-edge approach ensures not only natural-looking results but also accelerated healing and impressive hair density. With BIO FUE, you're not just restoring hair; you're optimizing your hair's potential.",
  //   },
  //   {
  //     header: 'Complementing Haircare Therapy',
  //     content:
  //       'At Novacutis Cosmetic Clinic, we believe in a holistic approach to hair restoration. In addition to our advanced hair transplant techniques, we offer a range of effective services that work in harmony to maximize your hair transplant results. Platelet-Rich Plasma (PRP) therapy, Derma Pen treatment, and Hair Meso Therapy are all powerful methods that stimulate hair growth, enhance blood circulation, and promote overall hair health. When combined with our cutting-edge hair transplant procedures, these services create a synergy that ensures you achieve the most natural-looking and long-lasting results possible.',
  //   },
  //   {
  //     header: 'PRP Therapy',
  //     content:
  //       'Platelet-Rich Plasma(PRP) involves harnessing the regenerative potential of your own blood, concentrating growth factors, and injecting them into the scalp. This holistic approach stimulates dormant hair follicles, promoting hair growth and thickness. The procedure is virtually painless and requires no downtime, making it an excellent complement to hair transplant techniques like FUE and BIO FUE.',
  //   },
  //   {
  //     header: 'Hair Meso Therapy',
  //     content:
  //       'This non-invasive technique involves micro-injections of a specialized cocktail of vitamins, minerals, and growth factors directly into the scalp. These essential nutrients rejuvenate hair follicles, stimulate hair growth, and improve overall hair quality. Hair Meso Therapy is a gentle yet powerful solution that enhances blood circulation and nourishes your scalp, leading to healthier and more vibrant hair. With minimal discomfort and no downtime, you can achieve a revitalized head of hair that boosts your confidence.',
  //   },
  //   {
  //     header: 'Derma Pen',
  //     content:
  //       'This cutting-edge method involves micro-needling the scalp with precision, stimulating collagen production and enhancing blood circulation. By creating tiny channels, the Derma Pen promotes the absorption of hair growth serums and encourages dormant hair follicles to awaken. With this minimally invasive procedure, you can experience improved hair density, thickness, and overall quality.',
  //   },
  // ];

  return (
    <div>
      <div className=" bg-background lg:flex lg:justify-center lg:items-center">
        <div className="lg:w-1/2 p-6 order-2 lg:order-1">
          <p className="font-poppins text-base md:text-base font-semibold leading-6 tracking-wider uppercase text-primary mb-2">
            Hair - Trasplant
          </p>
          <h1 className="mt-1 font-poppins text-4xl md:text-5xl font-semibold leading-none md:leading-normal  text-header">
            Get the hair you've always dreamed of!
          </h1>
          <p className="mt-3 text-lightblue font-poppins text-base md:text-xl  leading-snug font-medium">
            Lastest Hair Transplant Techniques at Novacutis Clinic
          </p>
          <button class="mt-8 flex items-center border-2 border-primary text-primary bg-transparent text-base md:text-xl font-semibold py-2 px-4 md:px-8 rounded-sm">
            Schedule Appointment
          </button>
        </div>

        <div className="hidden md:block lg:w-1/2 order-1 lg:order-2">
          <img
            src="https://img.freepik.com/premium-photo/head-balding-man-before-after-hair-transplant-surgery-man-losing-his-hair-has-become-shaggy-advertising-poster-hair-transplant-clinic-treatment-baldness_168410-1887.jpg?w=1060"
            alt="Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
