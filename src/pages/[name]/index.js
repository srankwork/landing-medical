import React from 'react';
 import { Helmet } from 'react-helmet';
 import Header from '../components/Headers';
 
 const IndexPage = () => {
   return (
     <div className='w-screen overflow-x-hidden h-screen'>
       <Helmet>
         <link
           rel='icon'
           href='https://www.novacutisclinics.com/assets/images/logo.png'
         />
         <title>Thank You</title>
       </Helmet>
       <main className='w-full h-full'>
         <div className=' bg-secondry h-10 w-full text-center flex  items-center text-white justify-around'>
           <span>
             <a
               href='tel:+917208330809'
               rel='noreferrer'
               className='font-semibold'
             >
               +91 7208330809
             </a>
           </span>
           <span className='flex items-center space-x-2'>
             <a
               href='https://www.novacutisclinics.com/location'
               className='flex items-center'
               target='_blank'
               rel='noreferrer'
             >
               <svg
                 xmlns='http://www.w3.org/2000/svg'
                 className='h-4 w-4 text-white'
                 fill='none'
                 viewBox='0 0 24 24'
                 stroke='currentColor'
               >
                 <path
                   strokeLinecap='round'
                   strokeLinejoin='round'
                   strokeWidth='2'
                   d='M12 22s-8-4.5-8-11a8 8 0 0116 0c0 6.5-8 11-8 11z'
                 />
               </svg>
               <span className='text-white font-semibold ml-2'>Locate Us</span>
             </a>
           </span>
         </div>
         <Header />
         <div className='w-screen mt-16 md:mt-5 overflow-hidden'>
           <h1 className=' text-6xl md:text-8xl  text-primary text-center font-bold'>
             Thank You
           </h1>
           <p className='text-center text-2xl font-semibold mt-4'>
             we will get back to you
           </p>
         </div>
         <div className='flex md:hidden flex-col justify-center items-center mt-12'>
           <h1 className='text-center font-semibold text-[24px]'>
             Discover the true potential of your aesthetic.
           </h1>
           <p className='text-[13px] text-center mt-[8px]'>
             Book your appointment in a few simple steps: Choose a service, pick
             your date and time, and fill in your details. See you soon!
           </p>
         </div>
         <div
           className='w-[100%] h-[1000px] md:mt-6'
           >
           <iframe
           className='w-[100%] h-[100%]'
             src='https://novacutis.zohobookings.in/portal-embed#/customer/drprachi'
             frameborder='0'
             allowfullscreen=''
           >
             {' '}
           </iframe>
         </div>
         <div className='bg-primary h-10 w-full text-center flex flex-col text-white justify-center fixed bottom-0'>
           <span>©2023</span>
         </div>
       </main>
     </div>
   );
 };
 
 export default IndexPage;
 
 export const Head = () => <title>Thank You</title>;