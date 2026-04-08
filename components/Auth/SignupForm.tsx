"use client";

import Link from "next/link";
import { useState } from "react";

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 px-8 py-8 shadow-sm">
      <form
      //   onSubmit={handleSubmit}
      >
        {/* First + Last name row */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div>
            <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
              First Name
            </label>
            <input
              type="text"
              value={form.firstName}
              //   onChange={handleChange('firstName')}
              placeholder="Arjun"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all
                ${
                  errors.firstName
                    ? "border-red-400 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
            />
            {errors.firstName && (
              <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={form.lastName}
              //   onChange={handleChange('lastName')}
              placeholder="Kumar"
              className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all
                ${
                  errors.lastName
                    ? "border-red-400 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
            />
            {errors.lastName && (
              <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={form.email}
            // onChange={handleChange('email')}
            placeholder="arjun@example.com"
            className={`w-full px-4 py-3 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all
              ${
                errors.email
                  ? "border-red-400 focus:border-red-500 bg-red-50"
                  : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              //   onChange={handleChange('password')}
              placeholder="Min 8 characters"
              className={`w-full px-4 py-3 pr-16 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all
                ${
                  errors.password
                    ? "border-red-400 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPassword ? "hide" : "show"}
            </button>
          </div>
          {errors.password && (
            <p className="mt-1.5 text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-7">
          <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={form.confirmPassword}
              //   onChange={handleChange('confirmPassword')}
              placeholder="Repeat password"
              className={`w-full px-4 py-3 pr-16 rounded-xl border text-sm text-gray-800 placeholder-gray-400 outline-none transition-all
                ${
                  errors.confirmPassword
                    ? "border-red-400 focus:border-red-500 bg-red-50"
                    : "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showConfirmPassword ? "hide" : "show"}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="mt-1.5 text-xs text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold tracking-wide transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Sign in link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-600 font-medium hover:text-blue-700 hover:underline transition-colors"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
