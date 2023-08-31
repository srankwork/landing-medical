// src/components/AppointmentModal.js
import React from 'react';
import BookAppointment from './AppointmentBook';

const AppoitmentModal = ({ show, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none '
      }`}
    >
      <div className='absolute inset-0 bg-black opacity-75 h-screen'></div>
      <div className='bg-white m-4 p-6 pb-8 rounded-lg shadow-lg z-20'>
        <div className='flex justify-end'>
          <button onClick={onClose} className='text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='w-6 h-6'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </button>
        </div>

        <BookAppointment showPadding={false} />
      </div>
    </div>
  );
};

export default AppoitmentModal;
