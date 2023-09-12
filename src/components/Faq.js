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
      question: 'What are dermal fillers?',
      answer:
        'Dermal fillers are injectable substances designed to add volume, smooth wrinkles, and rejuvenate the skin. They are commonly used to enhance facial features and restore a more youthful appearance.',
    },
    {
      question: 'How do dermal fillers work?',
      answer:
        'Dermal fillers work by plumping and hydrating the skin. They are typically composed of hyaluronic acid or other biocompatible materials that naturally occur in the body.',
    },
    {
      question: 'What concerns can dermal fillers address?',
      answer:
        'Dermal fillers can address a wide range of concerns, including lines and wrinkles, volume loss, lip enhancement, cheek augmentation, and under-eye hollows.',
    },
    {
      question: 'Are dermal fillers safe?',
      answer:
        'Yes, dermal fillers are generally safe when administered by a trained and qualified medical professional. They have a long history of use and are FDA-approved.',
    },
    {
      question: 'How long do dermal filler results last?',
      answer:
        'The duration of results can vary depending on the type of filler used, the treatment area, and individual factors. On average, results can last from 6 months to 2 years.',
    },
    {
      question: 'Is there downtime after dermal filler injections?',
      answer:
        'Downtime is minimal for most patients. Some swelling or bruising may occur but typically resolves within a few days.',
    },
    {
      question: 'Are dermal fillers reversible?',
      answer:
        'Some dermal fillers, particularly those made of hyaluronic acid, are reversible using a specific enzyme. Your provider can discuss this option with you if needed.',
    },
    {
      question:
        'What should I expect during a dermal filler treatment session?',
      answer:
        'During the procedure, a fine needle or cannula is used to inject the filler into the target area. You may experience mild discomfort, but local anaesthesia or numbing cream is often applied to minimize any pain.',
    },
    {
      question: 'Can dermal fillers be combined with other treatments?',
      answer:
        'Yes, dermal fillers can be combined with other cosmetic treatments like Botox or PDO Thread Lifts to achieve a comprehensive facial rejuvenation.',
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
