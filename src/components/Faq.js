import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mb-4'>
      <button
        className='text-left w-full text-xl font-semibold bg-white p-3 rounded-md shadow-md focus:outline-none'
        onClick={toggleAnswer}
      >
        {question}
      </button>
      {isOpen && (
        <div className='bg-gray-100 p-3 rounded-md mt-2'>
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
    <div className='max-w-screen-lg mx-auto p-6'>
      <h2 className='text-3xl font-semibold mb-8 text-center'>
        Frequently Asked Questions
      </h2>

      <div className='space-y-4'>
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqContainer;
