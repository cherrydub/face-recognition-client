import React from "react";

export default function Navigation({
  isSignedIn,
  setIsSignedIn,
  route,
  onRouteChange,
}) {
  if (isSignedIn) {
    return (
      <div>
        <nav className="text-right">
          <p></p>
          <p
            className="cursor-pointer hover:text-violet-700"
            onClick={() => onRouteChange("signout")}
          >
            Sign Out
          </p>
        </nav>
      </div>
    );
  } else {
    return (
      <div>
        <nav className="text-right">
          <p></p>
          <p>
            <span
              className="cursor-pointer hover:text-violet-700"
              onClick={() => onRouteChange("register")}
            >
              Register{" "}
            </span>{" "}
            |{" "}
            <span
              className="cursor-pointer hover:text-violet-700"
              onClick={() => onRouteChange("signin")}
            >
              {" "}
              Sign In
            </span>
          </p>
        </nav>
      </div>
    );
  }
}
