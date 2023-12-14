import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logo from '../image/Icons/logorang.png';

const BookAppointment = ({ forModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [insititue, setInsititue] = useState('');
  const [designation, setDesignation] = useState('');
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

      var raw = `xnQsjsdp=4c049833c62bc6288e1f9f9603dc0d33132b0dc8e44b8af1bf589120717ba921&zc_gad=&xmIwtLD=e5384f98bebdb4a151fc7265473d8e17fe6b917881e7fcc1d77cdfefb2cae7deeaba16963ac0ec7f151d4342a4c2ff81&actionType=TGVhZHM=&First%20Name=${
        name.split(' ').length ? name.split(' ')[0] : name
      }&Last%20Name=${
        name.split(' ').length >= 2 ? name.split(' ')[1] : ''
      }&Mobile=${phone}&Email=${email}&Company=${insititue}&Designation=${designation}&returnURL=https://www.rangeet.com/thank-you.html`;

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('https://crm.zoho.in/crm/WebToLeadForm', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          window.location.assign(
            'https://www.rangeet.com/thank-you.html'
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
        forModal ? '' : 'pt-14 md:pt-28 pb-28'
      } container m-auto hero-bg-3 `}
      id="appointmentForm"
    >
      <h1 className="font-poppins text-center text-lg md:text-3xl font-semibold leading-none md:leading-snug  text-primary">
        Implement Rangeet in your School and help shape a brighter future for
        students.
      </h1>

      <div className="md:flex md:space-x-4 mt-6 md:mt-14">
        <div className="md:w-3/4">
          {formError && (
            <div className="text-red-500 mt-1 text-center mb-2">
              {formError}
            </div>
          )}

          <form>
            <div className="md:flex md:space-x-4  mb-0 md:mb-4">
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className={`border-b-2 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
                    nameError ? 'border-red-500' : ''
                  }`}
                  placeholder="NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <div className="text-red-500 mt-1">{nameError}</div>
                )}
              </div>

              {/* Phone input */}
              <div className="mt-2 md:w-1/2">
                <input
                  type="number"
                  className={`border-b-2 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
                    phoneError ? 'border-red-500' : ''
                  }`}
                  placeholder="PHONE"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {phoneError && (
                  <div className="text-red-500 mt-1">{phoneError}</div>
                )}
              </div>
            </div>
            <div className="md:mb-4 md:flex md:space-x-4">
              <div className="mt-2 md:w-1/2">
                <input
                  type="email"
                  className={`border-b-2 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
                    emailError ? 'border-red-500' : ''
                  }`}
                  placeholder="YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="text-red-500 mt-1">{emailError}</div>
                )}
              </div>
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className="border-b-2 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="INSITITUE"
                  value={insititue}
                  onChange={(e) => setInsititue(e.target.value)}
                />
              </div>
            </div>
            <div className="md:mb-4 md:flex md:space-x-4">
              <div className="mt-2 md:w-1/2">
                <input
                  type="email"
                  className={`border-b-2 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder`}
                  placeholder="DESIGNATION"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="mt-2 md:w-1/2"></div>
            </div>
          </form>
        </div>
        <div className="md:w-1/4 mt-12 md:mt-0 items-center flex flex-col justify-center">
          <div className="hidden md:flex  justify-center items-center">
            <img
              src={logo}
              className="h-12 mr-2 mb-4"
              alt="logo"
              width="auto"
              height="auto"
            />
          </div>
          <button
            onClick={handleFindOutClick}
            className="w-full bg-primary py-2 px-6 rounded-sm transition-all duration-500 font-semibold text-lg text-center cursor-pointer text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
