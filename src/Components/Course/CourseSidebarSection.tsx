import { type FC } from "react";
import type { Course } from "../../Types";
import { ShareButtons, PaymentModal } from "../Common";
import { ImagePath } from "../../Constants";
import { useAppSelector, useAppDispatch } from "../../Store/Hook";
import { Mutation } from "../../Api";
import { setAuthModalOpen } from "../../Store/Slices/ModalSlice";

const CourseSidebarSection: FC<{ course?: Course }> = ({ course = {} }) => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const { mutate: purchaseCourse, isPending: isPurchasing } =
    Mutation.usePurchaseCourse();

  console.log(user, "user");
  const handleBuyNowBtn = () => {
    if (!user) {
      dispatch(setAuthModalOpen(true));
      return;
    }
  };

  const handlePaymentComplete = (status: any, response: any) => {
    console.log("Payment completed", status, response);
    if (status === "COMPLETED") {
      purchaseCourse(
        {
          courseId: course?._id || "",
          razorpayOrderId: response?.razorpay_order_id || "",
          razorpayPaymentId: response?.razorpay_payment_id || "",
        },
        {
          onSuccess: () => {
            alert("Payment Successful! Course Purchased.");
          },
          onError: (err: any) => {
            console.error("Purchase error:", err);
            alert(
              err?.response?.data?.message ||
                "Payment successful but course activation failed. Please contact support.",
            );
          },
        },
      );
    } else {
      alert("Payment Failed. Please try again.");
    }
  };

  const discountPrice = (course?.mrpPrice || 0) - (course?.price || 0);

  return (
    <div className="ed-course-sidebar edublink-col-lg-4 ">
      <div className="edublink-course-details-sidebar eb-course-single-4 sidebar-enable max-w-full!">
        <div className="edublink-course-details-sidebar-inner">
          <div className="edublink-course-details-sidebar-content">
            <h4 className="widget-title">Course Includes:</h4>

            <ul className="edublink-course-meta-informations">
              <li className="edublink-course-details-features-item course-price">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-60"></i>
                  Mrp Price:
                </span>
                <span className="edublink-course-feature-item-value">
                  <div className="course-price">
                    <span className="course-item-price">
                      {/* <span className="origin-price">{course?.price}</span> */}
                      <span className="price text-success!">
                        {course?.mrpPrice || 0}
                      </span>
                    </span>
                  </div>
                </span>
              </li>

              <li className="edublink-course-details-features-item course-price">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-60"></i>
                  Discount Price:
                </span>
                <span className="edublink-course-feature-item-value">
                  <div className="course-price">
                    <span className="course-item-price">
                      {/* <span className="origin-price">{course?.price}</span> */}
                      <span className="price">{discountPrice}</span>
                    </span>
                  </div>
                </span>
              </li>

              <li className="edublink-course-details-features-item course-price">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-60"></i>
                  Latest Price:
                </span>
                <span className="edublink-course-feature-item-value">
                  <div className="course-price">
                    <span className="course-item-price">
                      {/* <span className="origin-price">{course?.price}</span> */}
                      <span className="price  text-success!">
                        {course?.price}
                      </span>
                    </span>
                  </div>
                </span>
              </li>

              {/* <li className="edublink-course-details-features-item course-instructor">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-62"></i>Instructor:
                </span>
                <span className="edublink-course-feature-item-value">
                  Edward Norton
                </span>
              </li> */}

              <li className="edublink-course-details-features-item course-duration">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-61"></i>Duration:
                </span>
                <span className="edublink-course-feature-item-value">
                  {course?.duration || "15 weeks"}
                </span>
              </li>

              <li className="edublink-course-details-features-item course-lesson">
                <span className="edublink-course-feature-item-label">
                  <img
                    src={`${ImagePath}/icon/lesson-icon.svg`}
                    className="edublink-course-sidebar-img-icon"
                    alt=""
                  />
                  Lessons:
                </span>
                <span className="edublink-course-feature-item-value">11</span>
              </li>

              <li className="edublink-course-details-features-item course-student">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-63"></i>Students:
                </span>
                <span className="edublink-course-feature-item-value">
                  {course?.enrolledLearners}
                </span>
              </li>

              <li className="edublink-course-details-features-item course-language">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-59"></i>Language:
                </span>
                <span className="edublink-course-feature-item-value">
                  {course?.language}
                </span>
              </li>

              <li className="edublink-course-details-features-item course-certificate">
                <span className="edublink-course-feature-item-label">
                  <i className="icon-64"></i>Certifications:
                </span>
                <span className="edublink-course-feature-item-value">Yes</span>
              </li>
            </ul>

            <div className="edublink-course-details-sidebar-buttons">
              <div className="lp-course-buttons">
                {user ? (
                  <PaymentModal
                    btnText="Buy Now"
                    isLoading={isPurchasing}
                    amount={course?.price || 0}
                    userData={{
                      name: user.fullName,
                      email: user.email,
                      contact: user.phoneNumber,
                    }}
                    onPaymentComplete={handlePaymentComplete}
                    className="lp-button button button-purchase-course"
                  />
                ) : (
                  <button
                    onClick={handleBuyNowBtn}
                    className="lp-button button button-purchase-course"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>

            <ShareButtons
              url={window.location.href}
              title={course?.name || ""}
              variant="circle"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSidebarSection;
