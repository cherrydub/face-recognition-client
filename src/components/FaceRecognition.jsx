import React from "react";

export default function FaceRecognition({ input, imgData, box }) {
  if (imgData === undefined) {
    return (
      <div className="self-center text-center flex justify-center flex-col items-center">
        <>
          <p>Sorry no faces detected, please try another URL</p>
          <img
            className="border border-black w-1/4"
            src={input}
            alt={input}
            title={input}
          />
        </>
      </div>
    );
  } else {
    return (
      <div className="text-center flex flex-col items-center">
        {input.length !== 0 && imgData !== undefined ? (
          <>
            <div>{`${imgData.length} faces detected on image:`}</div>
            <div className="absolute mt-6">
              <img
                id="inputImg"
                className="border border-black"
                // className="border border-black w-1/2"
                src={input}
                alt={input}
                title={input}
                width={"300px"}
              />
              {/* {imgData} */}
              <div
                className="bounding-box"
                style={{
                  top: box.topRow,
                  right: box.rightCol,
                  bottom: box.bottomRow,
                  left: box.leftCol,
                }}
              ></div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
