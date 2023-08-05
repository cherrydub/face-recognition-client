import React from "react";

export default function Rank({ user }) {
  return (
    <>
      <div className="text-black text-center bg-white bg-opacity-75">
        <strong>{user.name}</strong>, your entries count is{" "}
        <strong>{user.entries}</strong>
      </div>
    </>
  );
}
