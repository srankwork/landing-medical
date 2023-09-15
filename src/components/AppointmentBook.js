import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import stage1 from '../image/Icons/Stage1.png';
import stage2 from '../image/Icons/Stage2.png';
import stage3 from '../image/Icons/Stage3.png';
import stage4 from '../image/Icons/Stage4.png';
import stage5 from '../image/Icons/Stage5.png';
import stage6 from '../image/Icons/Stage6.png';
import stage7 from '../image/Icons/Stage7.png';
import stage8 from '../image/Icons/Stage8.png';

const radioImage = [
  { img: stage1, value: 1, number: 'I' },
  { img: stage2, value: 2, number: 'II' },
  { img: stage3, value: 3, number: 'III' },
  { img: stage4, value: 4, number: 'IV' },
  { img: stage5, value: 5, number: 'V' },
  { img: stage6, value: 6, number: 'VI' },
  { img: stage7, value: 7, number: 'VII' },
  { img: stage8, value: 8, number: 'VIII' },
];

const BookAppointment = ({ forModal }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [baldness, setBaldness] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [baldnessError, setBaldnessError] = useState('');
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

    if (!baldness) {
      setBaldnessError('Please select grade');
      isValid = false;
    } else {
      setBaldnessError('');
    }
    if (!age) {
      setAgeError('Valid age is required');
      isValid = false;
    } else {
      setAgeError('');
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

      var raw = `xnQsjsdp=b25cb8f8ef33e0e98888bcba5fc285e2914f53ba89ae01046e1cc758c882cba3&zc_gad=&xmIwtLD=c029b288c892f1adde32678375ba81d2d973262c341e3ee2339b50dddb1f0add&actionType=TGVhZHM=&First%20Name=${
        name.split(' ').length ? name.split(' ')[0] : name
      }&Last%20Name=${
        name.split(' ').length >= 2 ? name.split(' ')[1] : ''
      }&Description=${age}&Mobile=${phone}&LEADCF1=${baldness}&Email=${email}&returnURL=https://www.novacutisclinics.com/services/thankyou/`;

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      console.log(raw);
      fetch('https://crm.zoho.in/crm/WebToLeadForm', requestOptions)
        .then((response) => response.text())
        .then((result) => {
          window.location.assign(
            'https://www.novacutisclinics.com/services/thankyou'
          );
        })
        .catch((error) => setFormError('Please try again'));
    } else {
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
      id="appointmentForm"
    >
      <p className="font-poppins text-xl md:text-2xl font-semibold leading-6 tracking-wider uppercase text-primary text-center">
        Curious about how much it will cost you?
      </p>
      <h1 className="mt-6 font-poppins text-center text-lg md:text-3xl font-semibold leading-none md:leading-snug  text-header">
        Find out the cost of a hair transformation tailored to your needs!
      </h1>

      <div className="md:flex md:space-x-4 mt-6 md:mt-14">
        <div className="md:w-3/4">
          {formError && (
            <div className="text-red-500 mt-1 text-center mb-2">
              {formError}
            </div>
          )}

          <form>
            <div className="md:flex md:space-x-4  mb-0 md:mb-8">
              <div className="mt-2 md:w-1/2">
                <input
                  type="text"
                  className={`border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
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
              <div className="mt-2 md:w-1/2">
                <input
                  type="number"
                  className={`border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
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
            <div className="mb-4 md:flex md:space-x-4">
              <div className="mt-2 md:w-1/2">
                <input
                  type="email"
                  className={`border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder ${
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
                  type="number"
                  className="border-b-2 border-border border-opacity-40 outline-none font-semibold py-2 w-full font-montserrat leading-2 placeholder-placeholder"
                  placeholder="YOUR AGE"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                {ageError && (
                  <div className="text-red-500 mt-1">{ageError}</div>
                )}
              </div>
            </div>
            <p className="text-center text-primary font-semibold mt-8 mb-2">
              Grade of Baldness:
            </p>
            {baldnessError && (
              <div className="text-red-500 mt-1 text-center">
                {baldnessError}
              </div>
            )}
            <div className="flex flex-wrap m-auto justify-center">
              {[...radioImage.slice(0, 4)].map((e) => (
                <div
                  key={`radiobutton-${e.value}`}
                  className="mr-6 md:mr-10 mt-4 flex flex-col items-center space-y-2"
                >
                  <img
                    src={e.img}
                    className="w-8 md:w-12 h-8 md:h-12 rounded-full"
                  />
                  <label className="font-semibold text-xs">{e.number}</label>
                  <input
                    type="radio"
                    value={e.value}
                    onChange={() => setBaldness(e.value)}
                    className="form-radio text-indigo-600"
                    name="radio-group"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap m-auto justify-center">
              {[...radioImage.slice(4)].map((e) => (
                <div
                  key={`radiobutton-${e.value}`}
                  className="mr-6 md:mr-10 mt-4 flex flex-col items-center space-y-2"
                >
                  <img
                    src={e.img}
                    className="w-8 md:w-12 h-8 md:h-12 rounded-full"
                  />
                  <label className="font-semibold text-xs">{e.number}</label>

                  <input
                    type="radio"
                    value={e.value}
                    onChange={() => setBaldness(e.value)}
                    className="form-radio text-indigo-600"
                    name="radio-group"
                  />
                </div>
              ))}
            </div>
          </form>
        </div>
        <div className="md:w-1/4 mt-12 md:mt-0 items-center flex flex-col justify-center">
          <div className="hidden md:flex  justify-center items-center">
            <img
              src="https://www.novacutisclinics.com/assets/images/logo.png"
              className=" h-14 md:h-16 mr-2"
              alt="logo"
              width="auto"
              height="auto"
            />
            <h1 className="text-2xl md:text-2xl font-poppins font-semibold leading-tight tracking-tight text-header text-center mb-6 w-4/6">
              Book Your Appointment
            </h1>
          </div>
          <div
            className="w-full bg-primary py-2 px-6 rounded-sm transition-all duration-500 font-semibold text-lg text-center cursor-pointer text-white"
            onClick={handleFindOutClick}
          >
            Find Out Now!
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookAppointment;
