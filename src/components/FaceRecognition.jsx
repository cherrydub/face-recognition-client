import React from "react";

export default function FaceRecognition({ input, imgData, boxes }) {
  // console.log("here is the boxxxx broski", box);
  //will have to update since counting faces now
  if (imgData === undefined) {
    return (
      <div className="self-center text-center flex justify-center flex-col items-center">
        <>
          <p className="font-bold bg-red-500 text-white">
            Sorry no faces detected, please try another URL
          </p>
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
      <div className=" text-center flex flex-col items-center">
        {input.length !== 0 && imgData !== undefined ? (
          <>
            <div className="font-bold bg-purple-500 text-white">{`${imgData.length} faces detected on image:`}</div>
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

              {boxes.map((box) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="bounding-box"
                    style={{
                      top: box.topRow,
                      right: box.rightCol,
                      bottom: box.bottomRow,
                      left: box.leftCol,
                    }}
                  ></div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    );
  }
}
