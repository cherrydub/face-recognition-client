import React from "react";

export default function ImageLinkForm() {
  return (
    <div>
      <p className="text-center">
        This Magic Brain will detect faces in your pictures. Give it a try.
      </p>
      <div className="flex justify-center">
        <div className="p-4 rounded-lg shadow-2xl">
          <input type="text" className="w-70 grow p-2 border border-white" />
          <button className="w-30 p-2 grow bg-violet-700 border border-white">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
