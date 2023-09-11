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
      question: 'Is laser hair removal permanent?',
      answer:
        'While it can significantly reduce hair growth, laser hair removal is often described as long-lasting but not entirely permanent. Maintenance sessions may be required over time to maintain hair reduction.',
    },
    {
      question:
        'Is laser hair removal safe for all skin types and hair colours?',
      answer:
        'Advancements in laser technology have made it more effective for a variety of skin tones and hair colours. However, the ideal treatment settings may vary based on your specific skin and hair type.',
    },
    {
      question: 'Does laser hair removal hurt?',
      answer:
        'Many people describe the sensation as similar to a rubber band snapping against the skin. It can be uncomfortable, but most find it tolerable. Some lasers have built-in cooling systems to minimise discomfort.',
    },
    {
      question: 'How long does a laser hair removal session take?',
      answer:
        'The duration of a session depends on the size of the treatment area. Small areas like the upper lip may take just a few minutes, while larger areas like the legs may take an hour or more.',
    },
    {
      question: 'How many sessions are typically needed for effective results?',
      answer:
        'Most people require multiple sessions (usually 6 to 8) spaced a few weeks apart to achieve significant and long-lasting hair reduction. The exact number varies depending on factors like hair colour, thickness and skin type.',
    },
    {
      question: 'Are there any side effects of laser hair removal?',
      answer:
        'Temporary side effects can include redness, swelling, and minor discomfort, but these typically subside within a day or two. Serious side effects are rare when the procedure is performed by a trained professional.',
    },
    {
      question: 'Is there any downtime after a laser hair removal session?',
      answer:
        "There is usually little to no downtime, and you can typically resume your regular activities immediately after treatment. However, it's essential to follow post-treatment care instructions, including sun protection.",
    },
    {
      question:
        'Are there any specific pre-treatment preparations I should be aware of?',
      answer:
        "Depending on your provider's recommendations, you may be advised to avoid sun exposure, waxing, or plucking in the treatment area before your session.",
    },
    {
      question: 'Is laser hair removal suitable for facial hair removal?',
      answer:
        'Yes, laser hair removal can be used to target facial hair, including areas like the upper lip, chin, and sideburns.',
    },
    {
      question:
        'Is laser hair removal safe for sensitive areas like the bikini line or underarms?',
      answer:
        "Yes, laser hair removal can be used on sensitive areas, but it's essential to choose a skilled practitioner experienced in treating these areas.",
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
