import { useState } from "react";
import { Mutation } from "../../Api";
import type { RegisterPayload } from "../../Types";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

const RegisterForm = ({ onSwitchToLogin }: RegisterFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [registerData, setRegisterData] = useState<RegisterPayload>({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    designation: "",
    agreeTerms: false,
  });

  const registerMutation = Mutation.useRegister();

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(registerData, {
      onSuccess: (data) => {
        console.log("Register successful", data);
        // Handle register success, e.g., switch to login or auto login
        onSwitchToLogin();
      },
      onError: (error) => {
        console.error("Register failed", error);
      },
    });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="u-column2 col-2">
      <h2>Register</h2>

      <form
        className="woocommerce-form woocommerce-form-register register"
        onSubmit={handleRegisterSubmit}
      >
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="fullName"
            id="fullName"
            autoComplete="name"
            value={registerData.fullName}
            onChange={handleRegisterChange}
            required
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="reg_email">
            Email address <span className="required">*</span>
          </label>
          <input
            type="email"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="email"
            id="reg_email"
            autoComplete="email"
            value={registerData.email}
            onChange={handleRegisterChange}
            required
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="phone">
            Phone <span className="required">*</span>
          </label>
          <input
            type="tel"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="phone"
            id="phone"
            autoComplete="tel"
            value={registerData.phone}
            onChange={handleRegisterChange}
            required
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="designation">
            Designation <span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text"
            name="designation"
            id="designation"
            autoComplete="organization-title"
            value={registerData.designation}
            onChange={handleRegisterChange}
            required
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
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
              value={registerData.password}
              onChange={handleRegisterChange}
              required
            />
            <button
              type="button"
              className={`show-password-input
                        ${showPassword ? "display-password" : ""}
                      `}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
              onClick={() => setShowPassword(!showPassword)}
            />
          </span>
        </p>

        <p className="woocommerce-form-row form-row">
          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox">
            <input
              type="checkbox"
              className="woocommerce-form__input woocommerce-form__input-checkbox"
              name="agreeTerms"
              checked={registerData.agreeTerms}
              onChange={handleRegisterChange}
              required
            />
            <span> I agree to the terms and conditions</span>
          </label>
        </p>

        <p className="woocommerce-form-row form-row">
          <button
            type="submit"
            className="main-header-btn edu-btn btn-medium w-full!"
          >
            Register
          </button>
        </p>
        <p className="my-0!">
          Already have an account?{" "}
          <a onClick={onSwitchToLogin}>Login here</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;