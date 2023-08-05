import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipboardJS from "clipboard";

export default function ImageLinkForm({ setInput }) {
  const [tempInput, setTempInput] = useState("");

  const handleCopyToClipboard = (text) => {
    const clipboard = new ClipboardJS(".clipboard-btn", {
      text: () => text,
    });
    clipboard.on("success", () => {
      toast.success("Copied to clipboard!");
      clipboard.destroy();
    });
    clipboard.on("error", () => {
      toast.error("Failed to copy to clipboard!");
      clipboard.destroy();
    });
    clipboard.onClick(event);
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
    <div className="bg-white bg-opacity-75 text-center">
      <p className="">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>

      <div className="flex justify-center">
        <div className="p-4 rounded-lg shadow-2xl">
          <form onSubmit={handleSubmit}>
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
        <div className="bg-white bg-opacity-75 fixed bottom-0">
          If you do not have your own link, please choose from one of these:
          <button
            className="clipboard-btn font-bold text-violet-500 hover:underline"
            onClick={() =>
              handleCopyToClipboard(
                "https://images.newscientist.com/wp-content/uploads/2022/02/14174128/PRI_223554170.jpg"
              )
            }
            title="copy"
          >
            image 1
          </button>
          {" | "}
          <button
            className="clipboard-btn font-bold text-violet-500 hover:underline"
            onClick={() =>
              handleCopyToClipboard(
                "https://kenneyjones.com/wp-content/uploads/2019/02/THE-FACES-RARE-SHOT.png"
              )
            }
            title="copy"
          >
            image 2
          </button>
          {" | "}
          <button
            className="clipboard-btn font-bold text-violet-500 hover:underline"
            onClick={() =>
              handleCopyToClipboard(
                "https://www.udiscovermusic.com/wp-content/uploads/2020/02/The-Beatles-GettyImages-1183628511-1000x600.jpg"
              )
            }
            title="copy"
          >
            image 3
          </button>
        </div>
      </div>
    </div>
  );
}
