import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ImageLinkForm({ setInput }) {
  const [tempInput, setTempInput] = useState("");
  const clipboardButtonRef = useRef(null); // Ref for the clipboard button

  const handleCopyToClipboard = (text) => {
    // ... (no changes needed in this function)
  };

  const handlePasteFromClipboard = () => {
    navigator.clipboard.readText().then((clipboardText) => {
      setTempInput(clipboardText); // Set clipboard content directly
      toast.success("Pasted from clipboard!");
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the input URL using regex
    const imageExtensions = /\.(jpg|jpeg|png|gif)$/i;
    if (!imageExtensions.test(tempInput)) {
      alert(
        "Please enter a valid image URL ending with .jpg, .jpeg, .png, or .gif"
      );
      return;
    }

    setInput(tempInput);
    setTempInput("");
  };

  const handleInputChange = (event) => {
    setTempInput(event.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white border-2 rounded-lg text-center pb-7 w-96">
        <p className="">
          This Magic Brain will detect faces in your pictures. Give it a try.
        </p>

        <div className="flex justify-center">
          <div className="p-4 rounded-lg shadow-2xl">
            <form onSubmit={handleSubmit}>
              <button
                type="button" // Change the button type to "button"
                className="w-30 p-2 grow bg-violet-500 hover:bg-violet-700 border border-white clipboard-btn"
                onClick={handlePasteFromClipboard}
                ref={clipboardButtonRef}
              >
                Paste
              </button>
              <input
                type="text"
                placeholder="add/paste URL here"
                value={tempInput}
                onChange={handleInputChange}
                className="w-90 grow p-2 border border-white"
              />
              <button
                type="submit"
                className="w-30 p-2 grow bg-violet-500 hover:bg-violet-700 border border-white"
              >
                Detect
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
