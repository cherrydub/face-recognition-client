import React from "react";
import Tilt from "react-parallax-tilt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipboardJS from "clipboard";
import brain from "../assets/brain.png";

const toastObj = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export default function Logo({ route, onRouteChange }) {
  const handleCopyToClipboard = (text) => {
    const clipboard = new ClipboardJS(".clipboard-btn", {
      text: () => text,
    });
    clipboard.on("success", () => {
      toast.success("Copied to clipboard!", toastObj);
      clipboard.destroy();
    });
    clipboard.on("error", () => {
      toast.error("Failed to copy to clipboard!", toastObj);
      clipboard.destroy();
    });
  };

  if (route === "signin" || route === "register" || route === "signout") {
    return (
      <div className="m-4">
        <div className="bg-white opacity-90 text-center">
          <div className="text-center flex items-center justify-center align-center">
            <img src={brain} alt="brain logo" width="100px" />
            <div>
              <p>
                For Demo purposes feel free to{" "}
                <span
                  onClick={() => onRouteChange("register")}
                  className="cursor-pointer hover:text-violet-700 font-bold"
                >
                  register
                </span>{" "}
                or use a{" "}
                <span
                  onClick={() => onRouteChange("signin")}
                  className="cursor-pointer hover:text-violet-700 font-bold"
                >
                  login
                </span>
                :
              </p>
              <div className="flex items-center">
                <img
                  src="https://www.svgrepo.com/show/479446/email-14.svg"
                  alt=""
                  title="copy email"
                  width="20px"
                  className="mr-2"
                />
                <button
                  className="clipboard-btn font-bold text-violet-500 hover:underline"
                  onClick={() => handleCopyToClipboard("test@gmail.com")}
                  title="copy"
                >
                  test@gmail.com
                </button>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="https://www.svgrepo.com/show/274446/key-password.svg"
                  alt=""
                  title="copy password"
                  width="20px"
                  className="mr-2"
                />
                <button
                  className="clipboard-btn font-bold text-violet-500 hover:underline"
                  onClick={() => handleCopyToClipboard("test")}
                  title="copy"
                >
                  test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-4">
        <div className="bg-white opacity-75 inline-block text-center w-full">
          <div className="text-center flex items-center justify-center align-center">
            <img
              className="text-center"
              src={brain}
              alt="brain logo"
              width="100px"
            />
          </div>
        </div>
      </div>
    );
  }
}
