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
      question: 'How do I purchase a Rangeet subscription?',
      answer:
        'A Rangeet subscription can be purchased from inside the Rangeet app after creating an account.',
    },
    {
      question: 'Can a parent use Rangeet?',
      answer:
        'Rangeet can be used by teachers, parents, and community members!',
    },
    {
      question: 'Do I need a subscription for students as well?',
      answer:
        'No, only a facilitator needs a subscription to teach Rangeet, which costs USD 100 per year.',
    },
    {
      question: 'Do I need a subscription for each teacher?',
      answer:
        'Yes, every teacher needs their own active subscription to teach Rangeet.',
    },
    {
      question: 'What is included in the free version of Rangeet?',
      answer:
        'In the free version, you get access to one lesson from each umbrella as well as a fun game to test your empathy levels.',
    },
    {
      question: 'Can I create my own curriculum?',
      answer:
        'Yes, you can create your own curriculum on our authoring tool in our Web App. Once input, the curriculum can be used on the Rangeet platform or exported to HTML5 or pdf formats.',
    },
    {
      question: 'What are the UN SDGs?',
      answer:
        'The Sustainable Development Goals (SDGs) are an urgent call for action by all UN member states to end poverty and other hardships through improving health and education, reducing inequality and spurring economic growth, all whilst tackling climate change.',
    },
    {
      question: 'How can I view my progress reports?',
      answer: 'Progress reports can be viewed via Rangeet’s Web App.',
    },
  ];
  return (
    <div className="max-w-screen-lg mx-auto p-4 md:p-6 mt-6 md:mt-12">
      <h2 className="text-center  text-3xl md:text-5xl font-semibold  tracking-tighter text-primary">
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
