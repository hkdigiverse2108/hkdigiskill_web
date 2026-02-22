import { useAppDispatch, useAppSelector } from "../../Store/Hook";
import { setAuthModalOpen } from "../../Store/Slices/ModalSlice";
import { AntdNotification } from "../../Utils/AntNotification";
import { notification } from "antd";
import { setUser } from "../../Store/Slices/UserSlice";
import { Mutation } from "../../Api";
import { STORAGE_KEYS } from "../../Constants/StorageKeys";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormInput, FormPasswordInput, FormCheckbox } from "../FormFields";

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const { isAuthModalOpen } = useAppSelector((state) => state.Modal);

  const registerMutation = Mutation.useRegister();
  const loginMutation = Mutation.useLogin();

  const handleClose = () => {
    dispatch(setAuthModalOpen(false));
  };

  const handleLoginSuccess = (data: any) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, data?.token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data));
    dispatch(setUser(data));
    AntdNotification(notification, "success", "Successfully logged in!");
    dispatch(setAuthModalOpen(false));
  };

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
    agreeTerms: false,
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
    designation: Yup.string().required("Designation is required"),
    agreeTerms: Yup.boolean().oneOf([true], "You must agree to the terms"),
  });

  const handleSubmit = (values: typeof initialValues) => {
    registerMutation.mutate(values, {
      onSuccess: (response) => {
        handleLoginSuccess(response?.data);
      },
      onError: (error: any) => {
        const errorMessage = error?.response?.data?.message || error?.message || "";

        if (typeof errorMessage === "string" && errorMessage.toLowerCase().includes("already registered")) {
          // Auto-login flow
          loginMutation.mutate(
            {
              email: values.email,
              password: values.password,
            },
            {
              onSuccess: (loginResponse) => {
                handleLoginSuccess(loginResponse?.data);
              },
              onError: (loginError: any) => {
                AntdNotification(
                  notification,
                  "error",
                  loginError?.response?.data?.message || "Login failed. Please check your credentials."
                );
              },
            }
          );
        } else {
          AntdNotification(
            notification,
            "error",
            errorMessage || "Registration failed. Please try again."
          );
        }
      },
    });
  };

  if (!isAuthModalOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="modal-overlay fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-999!"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-content bg-white p-8! rounded-xl shadow-2xl max-w-250 w-full mx-4! relative overflow-hidden"
      >
        <div className="mb-9! ">
          <p className="text-3xl sm:text-5xl font-bold text-gray-800  my-3! sm:my-6!">
            Fill The Form To Continue
          </p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="woocommerce-form woocommerce-form-register register auth-form">
              <FormInput
                label="Full Name *"
                name="fullName"
                id="fullName"
                autoComplete="name"
                containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                className="woocommerce-Input woocommerce-Input--text input-text"
              />

              <FormInput
                label="Email address *"
                name="email"
                id="reg_email"
                autoComplete="email"
                containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                className="woocommerce-Input woocommerce-Input--text input-text"
              />

              <FormInput
                label="Phone *"
                name="phone"
                id="phone"
                autoComplete="tel"
                containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                className="woocommerce-Input woocommerce-Input--text input-text"
              />

              <FormInput
                label="Designation *"
                name="designation"
                id="designation"
                autoComplete="organization-title"
                containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                className="woocommerce-Input woocommerce-Input--text input-text"
              />

              <FormPasswordInput
                label="Password *"
                name="password"
                id="reg_password"
                autoComplete="new-password"
                containerClassName="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!"
                className="woocommerce-Input woocommerce-Input--text input-text"
              />

              <FormCheckbox
                label="I agree to the terms and conditions"
                name="agreeTerms"
                containerClassName="woocommerce-form-row form-row mb-3!"
              />

              <p className="woocommerce-form-row form-row mb-3!">
                <button
                  type="submit"
                  disabled={registerMutation.isPending || loginMutation.isPending}
                  className="main-header-btn edu-btn btn-medium w-full! disabled:opacity-70"
                >
                  {registerMutation.isPending || loginMutation.isPending ? (
                    <span>Processing...</span>
                  ) : (
                    <span>Submit & Continue</span>
                  )}
                </button>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AuthModal;
