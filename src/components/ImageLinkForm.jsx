import React, { useState } from "react";

export default function ImageLinkForm({ setInput }) {
  const [tempInput, setTempInput] = useState("");

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
    <div className="bg-white bg-opacity-75">
      <p className="text-center">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className="flex justify-center">
        <div className="p-4 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="add URL here"
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
  );
}
