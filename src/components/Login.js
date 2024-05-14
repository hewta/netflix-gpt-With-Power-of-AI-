import React, { useState, useRef } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignIsForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIsForm(!isSignInForm);
  };

  //to get the reference of email,password and name,we have created useRef
  const email = useRef(null); //initial value is null
  const password = useRef(null);
  const name = useRef(null);

  const [errorMessage, setErrorMeggage] = useState(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const message = validate(
      email.current.value,
      password.current.value,
    );
    console.log(message);
    setErrorMeggage(message);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            //to get the reference of input i.e whatever we type uska reference ref={name}
            ref={name}
            type="text"
            className="p-4 my-2 w-full bg-gray-800 bg-opacity-60"
            placeholder="Enter your Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-60"
          placeholder="Email"
        />
        <input
          ref={password}
          type="password"
          className="p-4 my-2 w-full bg-gray-800 bg-opacity-60"
          placeholder="Password"
        />
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg hover:bg-red-800"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-lg py-2 text-red-500 font-bold">{errorMessage}</p>
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
