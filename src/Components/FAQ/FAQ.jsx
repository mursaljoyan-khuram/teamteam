import { useState } from "react";
import "./FAQ.css";

const questions = [
  {
    question: "What does NETLINKS do?",
    answer:
      "NETLINKS provides ERP, custom software development, AI and automation, IT staff augmentation, digital transformation, and cloud services.",
  },
  {
    question: "How experienced is NETLINKS with Odoo?",
    answer:
      "NETLINKS provides Odoo implementation, customization, integration, migration, and ongoing support for organizations across different industries.",
  },
  {
    question: "What industries does NETLINKS serve?",
    answer:
      "NETLINKS works across manufacturing, retail and eCommerce, professional services, public sector, nonprofits, and trades and field services.",
  },
  {
    question: "How does an engagement with NETLINKS start?",
    answer:
      "An engagement typically starts with a conversation about your business needs, existing systems, goals, and challenges. From there, the team can define the appropriate solution and delivery plan.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq-section">

      {/* Header */}
      <div className="faq-header">
        <p className="faq-label">QUESTIONS</p>

        <h2>
          Answers to what CIOs actually ask.
        </h2>
      </div>


      {/* Questions */}
      <div className="faq-list">

        {questions.map((item, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? "faq-open" : ""
            }`}
            key={item.question}
          >

            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              <span>{item.question}</span>

              <span className="faq-icon">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;