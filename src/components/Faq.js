import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="text-left w-full md:text-xl font-semibold bg-white p-3 rounded-md shadow-sm border-b-2 focus:outline-none"
        onClick={toggleAnswer}
      >
        {question}
      </button>
      {isOpen && (
        <div className="ml-2 p-3 rounded-md mt-1">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};
const FaqContainer = () => {
  const faqData = [
    {
      question: 'Is Thread Lift a painful procedure?',
      answer:
        'Most patients report minimal discomfort during the procedure. Local anaesthesia is used to numb the treatment area for a more comfortable experience.',
    },
    {
      question: 'How long does a Thread Lift procedure take?',
      answer:
        'The treatment typically takes around 30 to 60 minutes, making it a quick and convenient option for busy individuals.',
    },
    {
      question: 'What is the recovery time after a Thread Lift?',
      answer:
        'Recovery is usually minimal, with some mild swelling or bruising that typically subsides within a few days. Most patients can resume their daily activities almost immediately.',
    },
    {
      question: 'How long do the results of a Thread Lift last?',
      answer:
        'The immediate results are visible right after the treatment. Over the following months, as collagen production continues, the results improve and can last up to 12-24 months or longer, depending on individual factors.',
    },
    {
      question: 'Who is an ideal candidate for Thread Lift?',
      answer:
        'Ideal candidates are individuals with mild to moderate skin laxity who want to achieve a more lifted and youthful appearance without undergoing surgery.',
    },
    {
      question: 'Are threads safe?',
      answer:
        'Yes, threads have been used in the medical field for many years and are considered safe. They are biocompatible and fully absorbable by the body.',
    },
    {
      question: 'Can Thread Lift be combined with other treatments?',
      answer:
        'Yes, Thread Lift can be combined with other non-surgical treatments, such as dermal fillers or Botox, for a comprehensive facial rejuvenation approach.',
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto p-4 md:p-6 mt-6 md:mt-12">
      <h2 className="text-center font-poppins text-4xl md:text-5xl font-semibold leading-tight tracking-tighter text-header">
        FAQ
      </h2>
      <div className="mt-8 space-y-4">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqContainer;
