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
      question: 'Is hair transplant surgery safe?',
      answer:
        "Hair transplant procedures are generally considered safe when performed by qualified and experienced medical professionals in a controlled clinical setting. However, like any surgical procedure, there are risks involved, including infection, scarring, and complications related to anaesthesia. It's essential to choose a reputable clinic and discuss potential risks with your surgeon during the consultation to make an informed decision about your treatment.",
    },
    {
      question: 'Is hair transplant painful?',
      answer:
        'Local anaesthesia is used during the procedure, so patients typically do not feel pain. Some discomfort or soreness may be experienced during recovery.',
    },
    {
      question: 'How long does a typical hair transplant procedure take?',
      answer:
        'The duration of a hair transplant can vary depending on the extent of the procedure, but it often ranges from 4 to 8 hours.',
    },
    {
      question: 'How long does it take to see results?',
      answer:
        'It may take several months (typically 6-12) for the transplanted hair to grow and achieve the desired thickness.',
    },
    {
      question: 'Are there any risks or side effects to the procedure?',
      answer:
        "Common side effects include swelling, bruising, and minor discomfort. In rare cases, infection or scarring can occur. It's essential to choose a qualified surgeon to minimise risks.",
    },
    {
      question:
        'How soon can I return to work or normal activities after the procedure?',
      answer:
        'Most patients can resume light activities within a few days to a week after the procedure, but strenuous activities should be avoided for a few weeks.',
    },
    {
      question: 'Is there any non-surgical alternative to hair transplant?',
      answer:
        'Yes, non-surgical options include Mesotherapy, Derma Pen Therapy and platelet-rich plasma (PRP) treatments.',
    },
    // Add more FAQ items here
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
