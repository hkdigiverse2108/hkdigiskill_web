import { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import FaqCard from "../../Components/Faq/FaqCard";
import { MouseParallax } from "../../CoreComponents";
import { NavLink } from "react-router-dom";
import { ImagePath, ROUTES } from "../../Constants";

// const faqData = [
//   {
//     question: "What kind of support does EduBlink provide?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
//   {
//     question: "How long it take to create a video course?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
//   {
//     question: "How long do I get support & updates?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
//   {
//     question: "How long is my personal free trial?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
//   {
//     question: "How do I find a school where I want to study?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
//   {
//     question: "How can I contact a school directly?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
//   {
//     question: "Where can I find information on private companies?",
//     answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.",
//   },
// ];

const categories = [
  { id: "general", label: "General Questions" },
  { id: "regular", label: "Regular Questions" },
  { id: "advanced", label: "Advanced Questions" },
  { id: "policies", label: "Company Policies" },
  { id: "payment", label: "Payment Options" },
  { id: "terms", label: "Terms & Conditions" },
];

const faqData = {
  general: [
    {
      q: "How can I contact a school directly?",
      a: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    },
    {
      q: "How long is my personal free trial?",
      a: "Lorem ipsum dolor sit amet...",
    },
  ],
  regular: [
    {
      q: "What kind of support does EduBlink provide?",
      a: "Lorem ipsum dolor sit amet...",
    },
    {
      q: "How long do I get support & updates?",
      a: "Lorem ipsum dolor sit amet...",
    },
  ],
  advanced: [{ q: "Advanced question example?", a: "Lorem ipsum dolor..." }],
  policies: [{ q: "What are your company policies?", a: "Lorem ipsum dolor..." }],
  payment: [{ q: "What payment methods do you accept?", a: "Lorem ipsum dolor..." }],
  terms: [{ q: "What are the terms & conditions?", a: "Lorem ipsum dolor..." }],
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState("regular");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // .elementor-11511 .elementor-element.elementor-element-a104f8b .edublink-section-heading .heading {
  //     font-size: 28p
  return (
    <div id="faq">
      <section>
        <BreadCrumb title="Faq’s" />
      </section>
      <section>
        <div data-elementor-type="wp-page" data-elementor-id="11511" className="elementor elementor-11511">
          <section id="content-section" className="elementor-section elementor-top-section elementor-element elementor-element-925925d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="925925d" data-element_type="section">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ad8b0b" data-id="6ad8b0b" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  {/* <div className="elementor-element elementor-element-a26d5cf elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="a26d5cf" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="image.default">
                    <div className="elementor-widget-container">
                      <img decoding="async" width="641" height="607" src="https://demo.edublink.co/wp-content/uploads/2023/07/map-shape-1.png" className="attachment-full size-full wp-image-11517" alt="" sizes="(max-width: 641px) 100vw, 641px" />{" "}
                    </div>
                  </div> */}
                  <div className="elementor-element elementor-element-a104f8b elementor-widget elementor-widget-edublink-faq" data-id="a104f8b" data-element_type="widget" data-widget_type="edublink-faq.default">
                    <div className="elementor-widget-container">
                      <div className="eb-faq-wrapper eb-faq-style-2">
                        <div className="edublink-row">
                          <div className="edublink-col-lg-4">
                            <div className="eb-faq-left-side">
                              <div className="edublink-section-heading">
                                <h3 className="heading">Questions By This Category</h3>
                                <div className="sub-heading">
                                  <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore.</p>
                                </div>
                              </div>
                              {/* <div className="tabs"> */}
                              <ul className="eb-faq-heading-wrapper">
                                {categories.map((cat) => (
                                  <li key={cat.id} onClick={() => setActiveTab(cat.id)} className={`eb-faq-title ${activeTab === cat?.id ? "active" : ""} `}>
                                    <span className="eb-faq-title-heading">{cat.label}</span>
                                  </li>
                                  // <div key={cat.id} className={`tab-item ${activeTab === cat.id ? "active" : ""}`} onClick={() => setActiveTab(cat.id)}>
                                  //   {cat.label}
                                  // </div>
                                ))}
                                {/* </div> */}
                                {/* <li className="eb-faq-title active">
                                  <span className="eb-faq-title-heading">General Questions</span>
                                </li>
                                <li className="eb-faq-title">
                                  <span className="eb-faq-title-heading">Regular Questions</span>
                                </li>
                                <li className="eb-faq-title">
                                  <span className="eb-faq-title-heading">Advanced questions</span>
                                </li>
                                <li className="eb-faq-title">
                                  <span className="eb-faq-title-heading">Company Policies</span>
                                </li>
                                <li className="eb-faq-title">
                                  <span className="eb-faq-title-heading">Payment Options</span>
                                </li>
                                <li className="eb-faq-title">
                                  <span className="eb-faq-title-heading">Terms &amp; Conditions</span>
                                </li> */}
                              </ul>
                            </div>
                          </div>
                          <div className="edublink-col-lg-8">
                            <div className="eb-faqs-content-wrapper">
                              <div className="eb-faq-content edublink-fade active">
                                {" "}
                                <div data-elementor-type="section" data-elementor-id="11226" className="elementor elementor-11226">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-724c3af0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="724c3af0" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-68b3aefa" data-id="68b3aefa" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-18de9145 elementor-widget elementor-widget-edublink-accordion" data-id="18de9145" data-element_type="widget" data-widget_type="edublink-accordion.default">
                                            <div className="elementor-widget-container">
                                              <div className="eb-accordion header-default border-default style-default">
                                                {faqData[activeTab].map((item, index) => (
                                                  <FaqCard key={index} question={item.q} answer={item.a} />
                                                ))}
                                                {/* <div className="eb-accordion-item default-active elementor-repeater-item-0d1273e">
                                                  <h5 className="eb-accordion-header default-active">What kind of support does EduBlink provide? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body default-active">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2add476">
                                                  <h5 className="eb-accordion-header">How long it take to create a video course? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2f110c6">
                                                  <h5 className="eb-accordion-header">How long do I get support &amp; updates? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-449c49f">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-bbb14fe">
                                                  <h5 className="eb-accordion-header">How do I find a school where I want to study? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-002d4af">
                                                  <h5 className="eb-accordion-header">How can I contact a school directly? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-89c235b">
                                                  <h5 className="eb-accordion-header">Where can I find information on private companies? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                              <div className="eb-faq-content edublink-fade">
                                <div data-elementor-type="section" data-elementor-id="11228" className="elementor elementor-11228">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-15ae926 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="15ae926" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-24d1ee0e" data-id="24d1ee0e" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-7663d877 elementor-widget elementor-widget-edublink-accordion" data-id="7663d877" data-element_type="widget" data-widget_type="edublink-accordion.default">
                                            <div className="elementor-widget-container">
                                              <div className="eb-accordion header-default border-default style-default">
                                                <div className="eb-accordion-item default-active elementor-repeater-item-002d4af active-item">
                                                  <h5 className="eb-accordion-header default-active active">How can I contact a school directly? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body default-active">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-449c49f">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-0d1273e">
                                                  <h5 className="eb-accordion-header">What kind of support does EduBlink provide? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2f110c6">
                                                  <h5 className="eb-accordion-header">How long do I get support &amp; updates? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-89c235b">
                                                  <h5 className="eb-accordion-header">Where can I find information on private companies? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2add476">
                                                  <h5 className="eb-accordion-header">How long it take to create a video course? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-bbb14fe">
                                                  <h5 className="eb-accordion-header">How do I find a school where I want to study? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
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
                                </div>
                              </div>
                              <div className="eb-faq-content edublink-fade">
                                {" "}
                                <div data-elementor-type="section" data-elementor-id="11230" className="elementor elementor-11230">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-b8c62a2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="b8c62a2" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-167d5e48" data-id="167d5e48" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-2ebe3be5 elementor-widget elementor-widget-edublink-accordion" data-id="2ebe3be5" data-element_type="widget" data-widget_type="edublink-accordion.default">
                                            <div className="elementor-widget-container">
                                              <div className="eb-accordion header-default border-default style-default">
                                                <div className="eb-accordion-item default-active elementor-repeater-item-bbb14fe active-item">
                                                  <h5 className="eb-accordion-header default-active active">How do I find a school where I want to study? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body default-active">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2f110c6">
                                                  <h5 className="eb-accordion-header">How long do I get support &amp; updates? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-002d4af">
                                                  <h5 className="eb-accordion-header">How can I contact a school directly? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-449c49f">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-0d1273e">
                                                  <h5 className="eb-accordion-header">What kind of support does EduBlink provide? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2add476">
                                                  <h5 className="eb-accordion-header">How long it take to create a video course? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-89c235b">
                                                  <h5 className="eb-accordion-header">Where can I find information on private companies? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
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
                                </div>
                              </div>
                              <div className="eb-faq-content edublink-fade">
                                {" "}
                                <div data-elementor-type="section" data-elementor-id="11232" className="elementor elementor-11232">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-23717f05 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="23717f05" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40ed2496" data-id="40ed2496" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-73cb5ddc elementor-widget elementor-widget-edublink-accordion" data-id="73cb5ddc" data-element_type="widget" data-widget_type="edublink-accordion.default">
                                            <div className="elementor-widget-container">
                                              <div className="eb-accordion header-default border-default style-default">
                                                <div className="eb-accordion-item default-active elementor-repeater-item-0d1273e active-item">
                                                  <h5 className="eb-accordion-header default-active active">What kind of support does EduBlink provide? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body default-active">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2add476">
                                                  <h5 className="eb-accordion-header">How long it take to create a video course? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-89c235b">
                                                  <h5 className="eb-accordion-header">Where can I find information on private companies? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-bbb14fe">
                                                  <h5 className="eb-accordion-header">How do I find a school where I want to study? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-002d4af">
                                                  <h5 className="eb-accordion-header">How can I contact a school directly? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-449c49f">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2f110c6">
                                                  <h5 className="eb-accordion-header">How long do I get support &amp; updates? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
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
                                </div>
                              </div>
                              <div className="eb-faq-content edublink-fade">
                                {" "}
                                <div data-elementor-type="section" data-elementor-id="11234" className="elementor elementor-11234">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-5c496b92 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c496b92" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40de1e1f" data-id="40de1e1f" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-1fc8c6ea elementor-widget elementor-widget-edublink-accordion" data-id="1fc8c6ea" data-element_type="widget" data-widget_type="edublink-accordion.default">
                                            <div className="elementor-widget-container">
                                              <div className="eb-accordion header-default border-default style-default">
                                                <div className="eb-accordion-item default-active elementor-repeater-item-0d1273e active-item">
                                                  <h5 className="eb-accordion-header default-active active">How to Change my Plan using PayPal? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body default-active">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2add476">
                                                  <h5 className="eb-accordion-header">Is There Any Prerequisites To Learn Python? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-89c235b">
                                                  <h5 className="eb-accordion-header">Where can I find information on private companies? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-bbb14fe">
                                                  <h5 className="eb-accordion-header">How do I find a school where I want to study? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-002d4af">
                                                  <h5 className="eb-accordion-header">How can I contact a school directly? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-449c49f">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2f110c6">
                                                  <h5 className="eb-accordion-header">How long do I get support &amp; updates? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
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
                                </div>
                              </div>
                              <div className="eb-faq-content edublink-fade">
                                {" "}
                                <div data-elementor-type="section" data-elementor-id="11236" className="elementor elementor-11236">
                                  <section className="elementor-section elementor-top-section elementor-element elementor-element-1ea95c51 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1ea95c51" data-element_type="section">
                                    <div className="elementor-container elementor-column-gap-no">
                                      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-456bcaf1" data-id="456bcaf1" data-element_type="column">
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div className="elementor-element elementor-element-efdbd2f elementor-widget elementor-widget-edublink-accordion" data-id="efdbd2f" data-element_type="widget" data-widget_type="edublink-accordion.default">
                                            <div className="elementor-widget-container">
                                              <div className="eb-accordion header-default border-default style-default">
                                                <div className="eb-accordion-item default-active elementor-repeater-item-0d1273e active-item">
                                                  <h5 className="eb-accordion-header default-active active">Do You Provide Career Guideline? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body default-active">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2add476">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-89c235b">
                                                  <h5 className="eb-accordion-header">Where can I find information on private companies? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-bbb14fe">
                                                  <h5 className="eb-accordion-header">How do I find a school where I want to study? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-002d4af">
                                                  <h5 className="eb-accordion-header">How can I contact a school directly? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-449c49f">
                                                  <h5 className="eb-accordion-header">How long is my personal free trial? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="eb-accordion-item elementor-repeater-item-2f110c6">
                                                  <h5 className="eb-accordion-header">How do I redeem a coupon? </h5>
                                                  <div className="eb-accordion-content">
                                                    <div className="eb-accordion-body">
                                                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat.</p>{" "}
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <MouseParallax>
            <div className="hero">
              <div className="hero-content">
                <h1 className="hero-title">
                  Get Your Quality Skills <span>Certificate</span>
                  <br /> Through EduBlink
                </h1>

                <div className="button-container">
                  <div className="edublink-button-widget-wrapper">
                    <a className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style" href="#">
                      Get started now<i className="icon-4"></i>
                    </a>
                  </div>{" "}
                </div>
              </div>

              {/* Decorative elements */}
              <div data-depth={2} className="shape shape-left-1">
                <span>
                  <img src={`${ImagePath}about/shape-25.png`} alt="About Shape 5" />
                </span>
              </div>
              <div data-depth={-2} className="shape shape-left-2">
                <span className="">
                  <img decoding="async" src={`${ImagePath}about/shape-15.png`} alt="shape-03" />
                </span>
              </div>
              <div data-depth={2} className="shape shape-right-1">
                <span>
                  <img decoding="async" src={`${ImagePath}about/shape-45.png`} alt="shape-02" />
                </span>
              </div>
              <div data-depth={-2} className="shape shape-right-2">
                <span className="">
                  <img decoding="async" src={`${ImagePath}counterup/shape-02.png`} alt="shape-02" />
                </span>
              </div>
            </div>
            {/* <div className="edublink-page-title-area edublink-default-breadcrumb ">
              <div className="edublink-container">
                <div className="edublink-page-title">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Get Your Quality Skills <span className="edublink-color-secondary">Certificate</span> <br />
                    Through EduBlink
                  </h2>{" "}
                </div>
                <div className="edublink-breadcrumb-wrapper">
                  <nav className="edublink-breadcrumb">
                    <ul className="breadcrumb">
                      <div className="elementor-widget-container">
                        <div className="edublink-button-widget-wrapper">
                          <a className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style" href="#">
                            Get started now<i className="icon-4"></i>
                          </a>
                        </div>{" "}
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="shape-dot-wrapper shape-wrapper edublink-d-xl-block edublink-d-none">
             
                <div data-depth={-2} className="shape-image eb-mouse-animation shape-3">
                  <span>
                    <img src={`${ImagePath}about/shape-25.png`} alt="About Shape 5" />
                  </span>
                  <div data-depth={-2} className="shape-image eb-mouse-animation shape-4">
                    <span>
                      <img decoding="async" src={`${ImagePath}about/shape-15.png`} alt="shape-03" />
                    </span>
                  </div>
                </div>
                <div data-depth={-2} className="shape-image eb-mouse-animation shape-4">
                  <span>
                    <img decoding="async" src={`${ImagePath}about/shape-45.png`} alt="shape-02" />
                    <span data-depth={-2}>
                      <img decoding="async" src={`${ImagePath}counterup/shape-02.png`} alt="shape-02" />
                    </span>
                  </span>
                </div>
                <div data-depth={2} className="shape-image eb-mouse-animation shape-5"></div>
              </div>
            </div> */}
          </MouseParallax>
          {/* <section className="elementor-section elementor-top-section elementor-element elementor-element-d5f94f5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d5f94f5" data-element_type="section">
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c8dc0c2 animated edublink--slide-up" data-id="c8dc0c2" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b081855 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="b081855" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="-2.5">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-15.png" alt="Hero-Shape-3" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-0e1a4ae elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation animated fadeIn" data-id="0e1a4ae" data-element_type="widget" data-settings='{"_position":"absolute","_animation":"fadeIn"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="2.5">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-10.png" alt="shape-10" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d05dd0d elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="d05dd0d" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="-2">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-02.png" alt="Hero-Shape-18" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4395f93 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="4395f93" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="2">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-13.png" alt="Hero-Shape-1" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4a1657b edublink-br-tl-none elementor-widget elementor-widget-heading" data-id="4a1657b" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Get Your Quality Skills <span className="edublink-color-secondary">Certificate</span> <br />
                        Through EduBlink
                      </h2>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e8004dc elementor-widget elementor-widget-edublink-button" data-id="e8004dc" data-element_type="widget" data-widget_type="edublink-button.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-button-widget-wrapper">
                        <a className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style" href="#">
                          Get started now<i className="icon-4"></i>
                        </a>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* <section className="elementor-section elementor-top-section elementor-element elementor-element-d5f94f5 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d5f94f5" data-element_type="section" data-settings='{"background_background":"classNameic"}'>
            <div className="elementor-background-overlay"></div>
            <div className="elementor-container elementor-column-gap-extended">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c8dc0c2 animated edublink--slide-up" data-id="c8dc0c2" data-element_type="column" data-settings='{"animation":"edublink--slide-up","animation_delay":150}'>
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b081855 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="b081855" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="-2.5">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-15.png" alt="Hero-Shape-3" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-0e1a4ae elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation animated fadeIn" data-id="0e1a4ae" data-element_type="widget" data-settings='{"_position":"absolute","_animation":"fadeIn"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="2.5">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-10.png" alt="shape-10" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-d05dd0d elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="d05dd0d" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="-2">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-02.png" alt="Hero-Shape-18" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4395f93 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-edublink-animation" data-id="4395f93" data-element_type="widget" data-settings='{"_position":"absolute"}' data-widget_type="edublink-animation.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-animation-widget edublink-animation-display-type-mouse-track edublink-animation-content-type-image edublink-mouse-track-item">
                        <span data-depth="2">
                          <img decoding="async" src="https://demo.edublink.co/wp-content/uploads/2023/05/shape-13.png" alt="Hero-Shape-1" />
                        </span>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-4a1657b edublink-br-tl-none elementor-widget elementor-widget-heading" data-id="4a1657b" data-element_type="widget" data-widget_type="heading.default">
                    <div className="elementor-widget-container">
                      <h2 className="elementor-heading-title elementor-size-default">
                        Get Your Quality Skills <span className="edublink-color-secondary">Certificate</span> <br />
                        Through EduBlink
                      </h2>{" "}
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-e8004dc elementor-widget elementor-widget-edublink-button" data-id="e8004dc" data-element_type="widget" data-widget_type="edublink-button.default">
                    <div className="elementor-widget-container">
                      <div className="edublink-button-widget-wrapper">
                        <a className="edublink-button-item edublink-button-style-default edublink-button-size-custom edublink-button-icon-position-after default-style" href="#">
                          Get started now<i className="icon-4"></i>
                        </a>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </section>
    </div>
  );
};

export default Faq;
