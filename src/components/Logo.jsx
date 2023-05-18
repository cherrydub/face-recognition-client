import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "../assets/brain.png";

export default function Logo() {
  return (
    <div className="ml-4">
      <Tilt className="inline-block text-center shadow-2xl">
        <div
          className="inline-block text-center flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(89deg, #ff5edf 0%, #04c8de 100%)",
          }}
        >
          <img className="" src={brain} alt="brain logo" width="100px" />
        </div>
      </Tilt>
    </div>
  );
}
