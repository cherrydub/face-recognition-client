import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign in submitted");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-64 shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
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
        </div>
      </form>
    </div>
  );
}
