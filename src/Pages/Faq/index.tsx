import { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import FaqCard from "../../Components/Faq/FaqCard";
import GetCeritficateSection from "../../Components/Common/GetCeritficateSection";
import type { FaqCategory, FaqData } from "../../Types";

interface Category {
  id: FaqCategory;
  label: string;
}


const categories: Category[] = [
  { id: "general", label: "General Questions" },
  { id: "regular", label: "Regular Questions" },
  { id: "advanced", label: "Advanced Questions" },
  { id: "policies", label: "Company Policies" },
  { id: "payment", label: "Payment Options" },
  { id: "terms", label: "Terms & Conditions" },
];

const faqData: FaqData = {
  general: [
    { q: "How can I contact a school directly?", a: "Lorem ipsum dolor sit amet..." },
    { q: "How long is my personal free trial?", a: "Lorem ipsum dolor sit amet..." },
  ],
  regular: [
    { q: "What kind of support does edublink provide?", a: "Lorem ipsum dolor sit amet..." },
    { q: "How long do I get support & updates?", a: "Lorem ipsum dolor sit amet..." },
  ],
  advanced: [{ q: "Advanced question example?", a: "Lorem ipsum dolor..." }],
  policies: [{ q: "What are your company policies?", a: "Lorem ipsum dolor..." }],
  payment: [{ q: "What payment methods do you accept?", a: "Lorem ipsum dolor..." }],
  terms: [{ q: "What are the terms & conditions?", a: "Lorem ipsum dolor..." }],
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState("regular");

  return (
    <div id="faq">
      <section>
        <BreadCrumb title="Faq’s" />
      </section>

      <section className="">
        <div className="elementor elementor-11511">
          <section className="my-50! elementor-section elementor-section-boxed">
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100">
                <div className="elementor-widget-wrap elementor-element-populated">

                  <div className="elementor-widget elementor-widget-edublink-faq">
                    <div className="elementor-widget-container">
                      <div className="eb-faq-wrapper eb-faq-style-2">
                        <div className="edublink-row">

                          {/* LEFT SIDE */}
                          <div className="edublink-col-lg-4">
                            <div className="eb-faq-left-side">
                              <div className="edublink-section-heading">
                                <h3 className="heading">Questions By This Category</h3>
                                <div className="sub-heading">
                                  <p>
                                    Lorem ipsum dolor sit amet consectur
                                    adipiscing elit sed eius mod ex tempor
                                    incididunt labore.
                                  </p>
                                </div>
                              </div>

                              <ul className="eb-faq-heading-wrapper">
                                {categories.map((cat) => (
                                  <li
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`eb-faq-title ${
                                      activeTab === cat.id ? "active" : ""
                                    }`}
                                  >
                                    <span className="eb-faq-title-heading">
                                      {cat.label}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* RIGHT SIDE */}
                          <div className="edublink-col-lg-8">
                            <div className="eb-faqs-content-wrapper">

                              {categories.map((cat) => (
                                <div
                                  key={cat.id}
                                  className={`eb-faq-content edublink-fade ${
                                    activeTab === cat.id ? "active" : ""
                                  }`}
                                >
                                  <section className="elementor-section elementor-section-boxed">
                                    <div className="elementor-container">
                                      <div className="elementor-column elementor-col-100">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-widget elementor-widget-edublink-accordion  w-full!">
                                            <div className="elementor-widget-container  ">
                                              <div className="eb-accordion header-default border-default style-default">
                                                {faqData[cat.id]?.map(
                                                  (item, index) => (
                                                    <FaqCard
                                                      key={index}
                                                      question={item.q}
                                                      answer={item.a}
                                                    />
                                                  )
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              ))}

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          <GetCeritficateSection />
        </div>
      </section>
    </div>
  );
};

export default Faq;
