import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BookAppointment = ({ forModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [serviceError, setServiceError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formError, setFormError] = useState('');

  const validateInput = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!phone.trim()) {
      setPhoneError('Phone is required');
      isValid = false;
    } else if (phone.trim().length < 10 || phone.trim().length >= 11) {
      setPhoneError('Phone is invalid');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!email.trim() || !isValidEmail(email)) {
      setEmailError('Valid email is required');
      isValid = false;
    } else {
      setEmailError('');
    }
    // if (!service) {
    //   setServiceError('Please select area');
    //   isValid = false;
    // } else {
    //   setServiceError('');
    // }

    return isValid;
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleFindOutClick = () => {
    if (validateInput()) {
      var myHeaders = new Headers();
      myHeaders.append(
        'Content-Type',
        'application/x-www-form-urlencoded; charset=UTF-8'
      );

      var raw = `xnQsjsdp=b25cb8f8ef33e0e98888bcba5fc285e2914f53ba89ae01046e1cc758c882cba3&zc_gad=&xmIwtLD=c029b288c892f1adde32678375ba81d28c3f44139f4087ba9bc5da6710ecbb3e&actionType=TGVhZHM=&First%20Name=${
        name.split(' ').length ? name.split(' ')[0] : name
      }&Last%20Name=${
        name.split(' ').length >= 2 ? name.split(' ')[1] : ''
      }&Mobile=${phone}&Email=${email}&LEADCF1=${service}&returnURL=https://www.novacutisclinics.com/services/thankyou/`;

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch('https://crm.zoho.in/crm/WebToLeadForm', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          window.location.assign(
            'https://www.novacutisclinics.com/services/thankyou'
          );
        })
        .catch((error) => setFormError('Please try again'));
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-20%', opacity: 0 }}
      animate={{ x: inView ? 0 : '-20%', opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`px-4 md:px-10 ${
        forModal ? '' : 'pt-14 md:pt-28'
      } container m-auto`}
      id='appointmentForm'
    >
      {/* <p className='font-poppins text-xl md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center'>
        Curious about how much it will cost you?
      </p> */}
      <h1 className='font-poppins text-center text-lg md:text-3xl font-semibold leading-none md:leading-snug  text-header'>
        Experience the confidence of flawless skin with Novacutis Clinic
      </h1>

      <div className='md:flex md:space-x-4 mt-6 md:mt-14'>
        <div className='md:w-3/4'>
          {formError && (
            <div className='text-red-500 mt-1 text-center mb-2'>
              {formError}
            </div>
          )}

          <form>
            <div className='md:flex md:space-x-4  mb-0 md:mb-8'>
              <div className='mt-2 md:w-1/2'>
                <input
                  type='text'
                  className={`border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
                    nameError ? 'border-red-500' : ''
                  }`}
                  placeholder='NAME'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <div className='text-red-500 mt-1'>{nameError}</div>
                )}
              </div>

              {/* Phone input */}
              <div className='mt-2 md:w-1/2'>
                <input
                  type='number'
                  className={`border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
                    phoneError ? 'border-red-500' : ''
                  }`}
                  placeholder='PHONE'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {phoneError && (
                  <div className='text-red-500 mt-1'>{phoneError}</div>
                )}
              </div>
            </div>
            <div className='mb-4 md:flex md:space-x-4'>
              <div className='mt-2 md:w-1/2'>
                <input
                  type='email'
                  className={`border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  placeholder='YOUR EMAIL'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className='text-red-500 mt-1'>{emailError}</div>
                )}
              </div>
              <div className='mt-2 md:w-1/2'>
                <input
                  type='text'
                  className='border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder'
                  placeholder='AREA'
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                />
                {serviceError && (
                  <div className='text-red-500 mt-1'>{serviceError}</div>
                )}
              </div>
            </div>
          </form>
        </div>
        <div className='md:w-1/4 mt-12 md:mt-0 items-center flex flex-col justify-center'>
          <div className='hidden md:flex  justify-center items-center'>
            <img
              src='https://www.novacutisclinics.com/assets/images/logo.png'
              className=' h-14 md:h-16 mr-2'
              alt='logo'
              width='auto'
              height='auto'
            />
            <h1 className='text-2xl md:text-2xl font-poppins font-semibold leading-tight tracking-tight text-header text-center mb-6 w-4/6'>
              Book Your Consultation
            </h1>
          </div>
          <div
            className='w-full bg-primary py-2 px-6 rounded-sm transition-all duration-500 font-semibold text-lg text-center cursor-pointer text-white'
            onClick={handleFindOutClick}
          >
            Book Consulation
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
