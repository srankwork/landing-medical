import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mb-4'>
      <button
        className='text-left w-full md:text-xl font-semibold bg-white p-3 rounded-md shadow-sm border-b-2 focus:outline-none'
        onClick={toggleAnswer}
      >
        {question}
      </button>
      {isOpen && (
        <div className='ml-2 p-3 rounded-md mt-1'>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
const FaqContainer = () => {
  const faqData = [
    {
      question: 'How do I get started with your service?',
      answer:
        'To get started, you can visit our website and sign up for an account...'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and more...'
    }
    // Add more FAQ items here
  ];

  return (
    <div className='max-w-screen-lg mx-auto p-4 md:p-6 mt-6 md:mt-12'>
      <h2 className='text-center font-poppins text-4xl md:text-5xl font-semibold leading-tight tracking-tighter text-header'>
        FAQ
      </h2>
      <div className='mt-8 space-y-4'>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqContainer;
