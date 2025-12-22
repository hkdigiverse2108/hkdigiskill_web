import type { FC } from "react";
import type { FaqCardType } from "../../Types/Faq";

const FaqCard: FC<FaqCardType> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`eb-accordion-item elementor-repeater-item-2add476 ${
        isOpen ? "active default-active" : ""
      }`}
      onClick={onClick}
    >
      <h5
        className={`eb-accordion-header default-active ${
          isOpen ? "active" : ""
        }`}
      >
        {question}
      </h5>

      <div
        className="eb-accordion-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="eb-accordion-body default-active">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
