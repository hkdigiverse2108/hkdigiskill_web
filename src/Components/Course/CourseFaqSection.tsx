import { useState } from "react";
import { Queries } from "../../Api";
import FaqCard from "../Faq/FaqCard";

const CourseFaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { data } = Queries.useGetFaqByType({ type: "Course" });

  const faqs = data?.data?.faq_data || [];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="course-tab-panel-faq course-tab-panel">
      <div className="eb-accordion-wrapper eb-accordion-style-1">
        <div className="eb-accordion-container">
          {faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <FaqCard
                key={faq._id}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No FAQs available for this course.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseFaqSection;
