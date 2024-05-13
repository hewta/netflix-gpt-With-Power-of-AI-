import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignIsForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIsForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundimg"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-60"
          placeholder="Email or Mobile Number"
        />
        <input
          type="password"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-60"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-800">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="py-4 text-gray-400">
          {isSignInForm
            ? "New to Netflix?"
            : "Ready to watch? Enter your email or mobile number to create or restart your membership"}
        </span>
        {isSignInForm ? (
          <span
            onClick={toggleSignInForm}
            className="py-4 font-bold hover:underline cursor-pointer"
          >
            Sign up now.
          </span>
        ) : (
          <p
            onClick={toggleSignInForm}
            className="py-4 font-bold hover:underline cursor-pointer"
          >
            Sign In.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
