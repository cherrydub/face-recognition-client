import React, { useState } from "react";

export default function ImageLinkForm({ setInput }) {
  const [tempInput, setTempInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(tempInput);
    setTempInput("");
  };

  const handleInputChange = (event) => {
    setTempInput(event.target.value);
  };

  return (
    <div>
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
              className="w-70 grow p-2 border border-white"
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
