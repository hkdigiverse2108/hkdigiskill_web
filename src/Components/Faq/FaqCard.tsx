import { useState, type FC } from "react";
import type { FaqCardType } from "../../Types/Faq";

const FaqCard: FC<FaqCardType> = (faq) => {
  const [activeFaqId, setActiveFaqId] = useState<number | null>(null);

  const handleChange = (id: number) => setActiveFaqId((prev) => (prev === id ? null : id));

  return (
    <div className="eb-accordion-item default-active elementor-repeater-item-2add476" onClick={() => handleChange(1)}>
      <h5 className={`eb-accordion-header default-active ${activeFaqId === 1 && "active"}`}>
        {" "}
        {faq?.question}
        {/* How can I contact a school directly?  */}
      </h5>
      <div className="eb-accordion-content" style={{ display: activeFaqId === 1 ? "block" : "none" }}>
        <div className="eb-accordion-body default-active">
          <p>
            {" "}
            {faq?.answer}
            {/* Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;

