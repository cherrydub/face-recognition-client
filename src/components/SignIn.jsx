import React, { useState } from "react";

export default function SignIn({ isSignedIn, setIsSignedIn, onRouteChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "success") {
          console.log("changing in console");
          onRouteChange("home");
          console.log("Sign in submitted with details:", email, password);
        } else {
          console.log("not success? error");
        }
      });
    // Handle sign-in logic here
    // setIsSignedIn(true);
    // onRouteChange("home");
    // console.log("Sign in submitted with details:", email, password);
  };

  return (
    <div className=" flex justify-center items-start h-screen">
      <form
        className="bg-white bg-opacity-75  w-64 shadow-md rounded px-8 pt-6 pb-8 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold">SIGN IN</h1>
        <br />
        {/* <div className="mb-4 hidden">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className=" bg-transparent shadow appearance-none border border-black w-full py-2 px-3 text-black focus:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-black placeholder-black"
            id="email"
            type="email"
            // placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div> */}
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className=" bg-transparent shadow appearance-none border border-black w-full py-2 px-3 text-black focus:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-black placeholder-black"
            id="email"
            type="email"
            // placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className=" bg-transparent shadow appearance-none border border-black  w-full py-2 px-3 text-black focus:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-black placeholder-black"
            id="password"
            type="password"
            // placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          {/* <button
            className="hidden bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button> */}
        </div>
        <br />
        <div
          onClick={() => onRouteChange("register")}
          className="cursor-pointer text-right text-xs hover:text-violet-700"
        >
          Register
        </div>
      </form>
    </div>
  );
}
