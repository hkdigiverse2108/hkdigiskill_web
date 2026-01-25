import { useState, useEffect } from "react";
import { Mutation } from "../../Api";
import type { ForgotPasswordPayload, VerifyOtpPayload, ResendOtpPayload, ResetPasswordPayload } from "../../Types";
import { useNavigate } from "react-router-dom";

interface ForgotPasswordProps {
  onSwitchToLogin: () => void;
}

const ForgotPassword = ({ onSwitchToLogin }: ForgotPasswordProps) => {
  const [step, setStep] = useState<'email' | 'otp' | 'reset'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [timer, setTimer] = useState(0);

  const navigate = useNavigate();

  const forgotPasswordMutation = Mutation.useForgotPassword();
  const verifyOtpMutation = Mutation.useVerifyOtp();
  const resendOtpMutation = Mutation.useResendOtp();
  const resetPasswordMutation = Mutation.useResetPassword();

  useEffect(() => {
    const storedEndTime = localStorage.getItem('otpEndTime');
    if (storedEndTime) {
      const endTime = parseInt(storedEndTime);
      const now = Date.now();
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
      setTimer(remaining);
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            localStorage.removeItem('otpEndTime');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleForgotPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: ForgotPasswordPayload = { email };
    forgotPasswordMutation.mutate(payload, {
      onSuccess: () => {
        setStep('otp');
        const endTime = Date.now() + 60000; // 60 seconds
        localStorage.setItem('otpEndTime', endTime.toString());
        setTimer(60);
      },
      onError: (error) => {
        console.error("Forgot password failed", error);
      },
    });
  };

  const handleVerifyOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: VerifyOtpPayload = { email, otp };
    verifyOtpMutation.mutate(payload, {
      onSuccess: () => {
        setStep('reset');
        localStorage.removeItem('otpEndTime');
        setTimer(0);
      },
      onError: (error) => {
        console.error("Verify OTP failed", error);
      },
    });
  };

  const handleResendOtp = () => {
    const payload: ResendOtpPayload = { email };
    resendOtpMutation.mutate(payload, {
      onSuccess: () => {
        const endTime = Date.now() + 60000;
        localStorage.setItem('otpEndTime', endTime.toString());
        setTimer(60);
      },
      onError: (error) => {
        console.error("Resend OTP failed", error);
      },
    });
  };

  const handleResetPasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: ResetPasswordPayload = { email, newPassword };
    resetPasswordMutation.mutate(payload, {
      onSuccess: () => {
        // Redirect to login or show success message
        navigate('/my-account');
        onSwitchToLogin();
      },
      onError: (error) => {
        console.error("Reset password failed", error);
      },
    });
  };

  const renderEmailStep = () => (
    <div className="w-full!">
      <h2>Forgot Password</h2>
      <form
        className="woocommerce-form woocommerce-form-login login auth-form"
        onSubmit={handleForgotPasswordSubmit}
      >
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="email">
            Email address
            <span className="required">*</span>
          </label>
          <input
            type="email"
            className="woocommerce-Input woocommerce-Input--text input-text form"
            name="email"
            id="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p className="woocommerce-form-row form-row">
          <button type="submit" className="main-header-btn edu-btn btn-medium w-full!">
            Send OTP
          </button>
        </p>
        <div className="flex justify-center px-2! pb-0!">
          <span>
            Remember your password?{" "}
            <a onClick={onSwitchToLogin}>Login here</a>
          </span>
        </div>
      </form>
    </div>
  );

  const renderOtpStep = () => (
    <div className="w-full!">
      <h2>Verify OTP</h2>
      <form
        className="woocommerce-form woocommerce-form-login login auth-form"
        onSubmit={handleVerifyOtpSubmit}
      >
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="otp">
            OTP
            <span className="required">*</span>
          </label>
          <input
            type="text"
            className="woocommerce-Input woocommerce-Input--text input-text form"
            name="otp"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </p>
        <p className="woocommerce-form-row form-row">
          <button type="submit" className="main-header-btn edu-btn btn-medium w-full!">
            Verify OTP
          </button>
        </p>
        <div className="flex justify-center px-2! pb-0!">
          <span>
            Didn't receive OTP?{" "}
            {timer > 0 ? (
              <span>Resend in {timer}s</span>
            ) : (
              <a onClick={handleResendOtp}>Resend OTP</a>
            )}
          </span>
        </div>
      </form>
    </div>
  );

  const renderResetStep = () => (
    <div className="w-full!">
      <h2>Reset Password</h2>
      <form
        className="woocommerce-form woocommerce-form-login login auth-form"
        onSubmit={handleResetPasswordSubmit}
      >
        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
          <label htmlFor="newPassword">
            New Password <span className="required">*</span>
          </label>
          <span className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              className="woocommerce-Input woocommerce-Input--text input-text"
              name="newPassword"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className={`show-password-input
                        ${showPassword ? "display-password" : ""}`}
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword(!showPassword)}
            />
          </span>
        </p>
        <p className="woocommerce-form-row form-row">
          <button type="submit" className="main-header-btn edu-btn btn-medium w-full!">
            Reset Password
          </button>
        </p>
      </form>
    </div>
  );

  return (
    <>
      {step === 'email' && renderEmailStep()}
      {step === 'otp' && renderOtpStep()}
      {step === 'reset' && renderResetStep()}
    </>
  );
};

export default ForgotPassword;