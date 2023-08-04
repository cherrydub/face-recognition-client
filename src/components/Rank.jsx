import React from "react";

export default function Rank({ user }) {
  return (
    <>
      <div className="text-black text-center">
        {user.name}, your entries count is {user.entries}
      </div>
    </>
  );
}
