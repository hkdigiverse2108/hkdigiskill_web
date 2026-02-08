import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/Hook";
import { setAuthModalOpen } from "../../Store/Slices/ModalSlice";
import { setUser } from "../../Store/Slices/UserSlice";
import { Mutation } from "../../Api";
import { STORAGE_KEYS } from "../../Constants/StorageKeys";
import type { RegisterPayload } from "../../Types";
import { AntdNotification } from "../../Utils/AntNotification";
import { notification } from "antd";

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const { isAuthModalOpen } = useAppSelector((state) => state.Modal);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<RegisterPayload>({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
    agreeTerms: false,
  });

  const registerMutation = Mutation.useRegister();
  const loginMutation = Mutation.useLogin();

  const handleClose = () => {
    dispatch(setAuthModalOpen(false));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLoginSuccess = (data: any) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, data?.token);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data));
    dispatch(setUser(data));
    dispatch(setAuthModalOpen(false));
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      designation: "",
      agreeTerms: false,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(formData, {
      onSuccess: (response) => {
        handleLoginSuccess(response?.data);
      },
      onError: (error: any) => {
        const errorMessage =
          error?.response?.data?.message || error?.message || "";

        console.log("errorMessage", errorMessage, error);

        if (
          typeof errorMessage === "string" &&
          errorMessage.toLowerCase().includes("already registered")
        ) {
          // Auto-login flow
          loginMutation.mutate(
            {
              email: formData.email,
              password: formData.password,
            },
            {
              onSuccess: (loginResponse) => {
                handleLoginSuccess(loginResponse?.data);
              },
              onError: (loginError: any) => {
                AntdNotification(
                  notification,
                  "error",
                  loginError?.response?.data?.message ||
                    "Login failed. Please check your credentials.",
                );
              },
            },
          );
        } else {
          AntdNotification(
            notification,
            "error",
            errorMessage || "Registration failed. Please try again.",
          );
        }
      },
    });
  };

  if (!isAuthModalOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="modal-overlay fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-9999!"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-content bg-white p-8! rounded-xl shadow-2xl max-w-250 w-full mx-4! relative overflow-hidden"
      >
        {/* <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors py-2! px-3!  "
        >
          <i className="ri-close-line text-2xl!"></i>
        </button> */}

        <div className="mb-9! ">
          <p className="text-3xl sm:text-5xl font-bold text-gray-800  my-3! sm:my-6!">
            Fill The Form To Continue
          </p>
          {/* <p className="text-gray-500 ">Please provide your information to continue</p> */}
        </div>
        <form
          className="woocommerce-form woocommerce-form-register register auth-form"
          onSubmit={handleSubmit}
        >
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              className="woocommerce-Input woocommerce-Input--text input-text"
              name="fullName"
              id="fullName"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </p>

          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!">
            <label htmlFor="reg_email">
              Email address <span className="required">*</span>
            </label>
            <input
              type="email"
              className="woocommerce-Input woocommerce-Input--text input-text"
              name="email"
              id="reg_email"
              autoComplete="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </p>

          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!">
            <label htmlFor="phone">
              Phone <span className="required">*</span>
            </label>
            <input
              type="tel"
              className="woocommerce-Input woocommerce-Input--text input-text"
              name="phone"
              id="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </p>

          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!">
            <label htmlFor="designation">
              Designation <span className="required">*</span>
            </label>
            <input
              type="text"
              className="woocommerce-Input woocommerce-Input--text input-text"
              name="designation"
              id="designation"
              autoComplete="organization-title"
              value={formData.designation}
              onChange={handleInputChange}
              required
            />
          </p>

          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide mb-3!">
            <label htmlFor="reg_password">
              Password <span className="required">*</span>
            </label>
            <span className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                className="woocommerce-Input woocommerce-Input--text input-text"
                name="password"
                id="reg_password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className={`show-password-input
                        ${showPassword ? "display-password" : ""}
                      `}
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
              />
            </span>
          </p>

          <p className="woocommerce-form-row form-row mb-3!">
            <label className="woocommerce-form__label woocommerce-form__label-for-checkbox">
              <input
                type="checkbox"
                className="woocommerce-form__input woocommerce-form__input-checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                // required
              />
              <span className="max-sm:text-[13px]">
                {" "}
                I agree to the terms and conditions
              </span>
            </label>
          </p>

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
          {/* <p className="my-0!">
            Already have an account? <a onClick={onSwitchToLogin}>Login here</a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
