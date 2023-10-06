import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

const serverApi =
  import.meta.env.VITE_REACT_APP_API_URL || "http://localhost:3000";

export default function Register({
  isSignedIn,
  setIsSignedIn,
  onRouteChange,
  setUser,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    toast.loading("registering...");
    e.preventDefault();
    // Handle sign-in logic here
    // setIsSignedIn(true);

    axios
      .post(`${serverApi}/register`, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => response.data)
      .then((user) => {
        setUser({
          id: user.id,
          name: user.name,
          email: user.email,
          entries: user.entries,
          joined: user.joined,
        });
        toast.dismiss;
        toast.success("successfully registered");
        // console.log(user, "these are the user stuff");
      });
    onRouteChange("signin");
    // console.log("Register submitted with details:", email, password, name);
  };

  return (
    <div className="flex justify-center items-start h-screen">
      <form
        className="bg-white border-2 w-96 shadow-md rounded-lg px-8 pt-6 pb-8 "
        onSubmit={handleSubmit}
      >
        <h1 className="text-center font-bold">REGISTER</h1>
        <br />
        <div className="mb-4">
          <label
            className="block text-black text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className=" bg-transparent shadow appearance-none border border-black w-full py-2 px-3 text-black focus:text-white leading-tight focus:outline-none focus:shadow-outline focus:bg-black placeholder-black"
            id="name"
            type="name"
            // placeholder="Enter your email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            className=" bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <br />
        <div
          onClick={() => onRouteChange("signin")}
          className="cursor-pointer text-right text-xs hover:text-violet-700"
        >
          Sign In
        </div>
      </form>
    </div>
  );
}
