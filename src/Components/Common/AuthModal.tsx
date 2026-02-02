import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/Hook";
import { setAuthModalOpen } from "../../Store/Slices/ModalSlice";
import { setUser } from "../../Store/Slices/UserSlice";
import { Mutation } from "../../Api";
import { STORAGE_KEYS } from "../../Constants/StorageKeys";
import type { RegisterPayload } from "../../Types";

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
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate(formData, {
      onSuccess: (response) => {
        handleLoginSuccess(response?.data);
      },
      onError: (error: any) => {
        const errorMessage = error?.response?.data?.message || "";
        if (errorMessage.toLowerCase().includes("already exist")) {
          // If user already exists, try logging in
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
                alert(
                  loginError?.response?.data?.message ||
                    "Login failed. Please check your credentials.",
                );
              },
            },
          );
        } else {
          alert(errorMessage || "Registration failed. Please try again.");
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
        className="modal-content bg-white p-8! rounded-xl shadow-2xl max-w-lg w-full mx-4! relative overflow-hidden"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <i className="ri-close-line text-2xl"></i>
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Enter Your Details
          </h2>
          <p className="text-gray-500">
            Please provide your information to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4!">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4!">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Designation *
            </label>
            <input
              type="text"
              name="designation"
              placeholder="Your Job Title / Designation"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              value={formData.designation}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                className={`show-password-input ${showPassword ? "display-password" : ""} absolute right-3 top-1/2 -translate-y-1/2`}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-600">
              I agree to the terms and conditions
            </label>
          </div>

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
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
