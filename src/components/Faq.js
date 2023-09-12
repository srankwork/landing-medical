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
      question: 'How much does this treatment cost?',
      answer:
        "The cost of a cosmetic injectable treatment can vary widely depending on factors such as the area treated, the number of units used, and geographic location. It's best to consult with a provider for specific pricing.",
    },
    {
      question: 'Is there an optimal age to start these treatments?',
      answer:
        "There is no specific age requirement for cosmetic injectables, and it can be used by individuals at various stages of life. It's often used to address wrinkles and fine lines that result from repeated facial expressions.",
    },
    {
      question:
        'Can this procedure be used to treat excessive sweating (hyperhidrosis)?',
      answer:
        'Yes, this procedure can effectively treat excessive sweating in areas like the underarms, hands, and feet by temporarily blocking the nerve signals that stimulate sweat glands.',
    },
    {
      question:
        'Are there any long-term effects of using these cosmetic injectables?',
      answer:
        'Long-term effects of cosmetic injectable use are generally considered safe when administered by a qualified professional. Continuous treatments can provide ongoing wrinkle reduction.',
    },
    {
      question: 'How do I choose a qualified cosmetic injectable provider?',
      answer:
        "It's essential to choose a board-certified dermatologist, cosmetologist, or experienced medical professional for muscle relaxing injections. Ask for referrals, check reviews, and inquire about their experience.",
    },
    {
      question: 'Can I have allergic reactions to cosmetic injectables?',
      answer:
        'While allergic reactions to cosmetic injectables are rare, they can occur. Be sure to inform your provider of any allergies or previous allergic reactions to similar products.',
    },
    {
      question: 'How should I prepare for my appointment?',
      answer:
        "There are typically no specific pre-treatment preparations needed. However, it's advisable to inform your provider about any medications, supplements, or medical conditions you have.",
    },
    {
      question:
        'Is the premier muscle relaxer only used for cosmetic purposes?',
      answer:
        "No, it has both cosmetic and medical applications. It's used to treat various medical conditions, including migraines, muscle spasms, and overactive bladder.",
    },
    {
      question: 'Can men get these treatments?',
      answer:
        'Absolutely. This injectable is not limited by gender and is commonly sought after by both men and women for cosmetic and medical purposes.',
    },
    {
      question: 'How does this differ from dermal fillers?',
      answer:
        'This cosmetic injectable works by temporarily relaxing muscles to reduce wrinkles, while dermal fillers add volume to areas with lines and wrinkles. Both are used for facial rejuvenation but target different concerns.',
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
