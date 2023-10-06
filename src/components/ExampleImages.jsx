import React from "react";
import ClipboardJS from "clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ExampleImages() {
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

  return (
    <div className="flex justify-center text-center mt-4">
      <div className="bg-white border-2 rounded-lg w-96">
        {`example images: `}
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
  );
}
