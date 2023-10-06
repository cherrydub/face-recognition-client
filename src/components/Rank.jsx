import React from "react";

export default function Rank({ user }) {
  return (
    <div className="flex justify-center mb-4">
      <div className="text-black text-center bg-white w-96 border-2 rounded-lg">
        <strong>{user.name}</strong>, your entries count is{" "}
        <strong>{user.entries}</strong>
      </div>
    </div>
  );
}
