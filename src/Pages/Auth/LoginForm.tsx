import { useState } from "react";
import { Mutation } from "../../Api";
import type { LoginPayload } from "../../Types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Store/Hook";
import { setUser } from "../../Store/Slices/UserSlice";
import { STORAGE_KEYS } from "../../Constants/StorageKeys";

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onSwitchToForgot: () => void;
}

const LoginForm = ({ onSwitchToRegister, onSwitchToForgot }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<LoginPayload>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginMutation = Mutation.useLogin();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(loginData, {
      onSuccess: (data) => {
        // console.log("Login successful", data);
        // Store token and user in localStorage
        localStorage.setItem(STORAGE_KEYS.TOKEN, data?.data?.token);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(data?.data));
        // Store user in Redux
        dispatch(setUser(data?.data));
        // Handle login success, e.g., store token, redirect
        navigate("/");
      },
      onError: (error) => {
        console.error("Login failed", error);
      },
    });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <div className="  w-full! ">
      <h2>Login</h2>

      <form
        className="woocommerce-form woocommerce-form-login login auth-form"
        onSubmit={handleLoginSubmit}
      >
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="username">
            Username or email address
            <span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text form "
            name="email"
            id="username"
            autoComplete="username"
            value={loginData.email}
            onChange={handleLoginChange}
            required
          />
        </p>

        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <span className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              className="woocommerce-Input woocommerce-Input--text input-text "
              name="password"
              id="password"
              autoComplete="current-password"
              value={loginData.password}
              onChange={handleLoginChange}
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

        {/* <p className="woocommerce-form-row form-row">
          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme ">
            <input
              type="checkbox"
              className="woocommerce-form__input woocommerce-form__input-checkbox"
              name="rememberme"
              value="forever"
            />
            <span> Remember me</span>
          </label>
        </p> */}

        <p className="woocommerce-form-row form-row mb-3!">
          <button type="submit" className="main-header-btn edu-btn btn-medium w-full!">
            Log in
          </button>
        </p>

        <div className="flex max-sm:flex-col! justify-between gap-6! px-2! pb-0!">
          <span className="woocommerce-LostPassword lost_password">
            <a onClick={onSwitchToForgot}>Forgot your password?</a>
          </span>
          <span>
            Don't have an account?{" "}
            <a onClick={onSwitchToRegister}>Register here</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
