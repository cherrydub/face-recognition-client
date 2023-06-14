import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "../assets/brain.png";

export default function Logo({ route, onRouteChange }) {
  if (route === "signin" || route === "register" || route === "signout") {
    return (
      <div className="mx-4">
        <Tilt className="bg-white opacity-75 inline-block text-center w-full">
          <div
            className="text-center flex items-center justify-center align-center "
            // style={{
            //   backgroundImage: "linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)",
            // }}
          >
            <img
              onClick={() => onRouteChange("home")}
              className="text-center cursor-pointer hover:bg-purple-700 hover:rounded-lg"
              src={brain}
              alt="brain logo"
              width="100px"
            />
            For Demo purposes, feel free to click logo to skip sign in
          </div>
        </Tilt>
      </div>
    );
  } else {
    return (
      <div className=" mx-4">
        <Tilt className="bg-white opacity-75 inline-block text-center w-full">
          <div
            className="text-center flex items-center justify-center align-center "
            // style={{
            //   backgroundImage: "linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)",
            // }}
          >
            <img
              className="text-center"
              src={brain}
              alt="brain logo"
              width="100px"
            />
          </div>
        </Tilt>
      </div>
    );
  }
}
