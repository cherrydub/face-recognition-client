import { useState, useEffect } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import ParticlesBg from "particles-bg";
import SignIn from "./components/Login/SignIn";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [imgData, setImgData] = useState([]);
  const [box, setBox] = useState({});
  const [boxes, setBoxes] = useState([]);

  const calculateFaceBox = (data) => {
    const firstFace = data[0];
    const img = document.getElementById("inputImg");
    const imgWidth = Number(img.width);
    const imgHeight = Number(img.height);
    const boundingBox = firstFace.region_info.bounding_box;

    const boundingBoxes = data.map((eachData) => {
      return eachData.region_info.bounding_box;
    });

    const boundingBoxesCalculated = boundingBoxes.map((eachData) => {
      return {
        leftCol: eachData.left_col * imgWidth,
        rightCol: imgWidth - eachData.right_col * imgWidth,
        topRow: eachData.top_row * imgHeight,
        bottomRow: imgHeight - eachData.bottom_row * imgHeight,
      };
    });

    // console.log("width/height", imgWidth, imgHeight);
    // console.log("all data: :", data);
    // console.log("first data:", firstFace.region_info.bounding_box);
    // console.log("img data:", imgData);
    // console.log("bounding box", boundingBox);
    console.log("all bounding boxes:", boundingBoxes);
    console.log("calculated ones here", boundingBoxesCalculated);

    setBoxes(boundingBoxesCalculated);

    setBox({
      leftCol: boundingBox.left_col * imgWidth,
      rightCol: imgWidth - boundingBox.right_col * imgWidth,
      topRow: boundingBox.top_row * imgHeight,
      bottomRow: imgHeight - boundingBox.bottom_row * imgHeight,
    });

    // return {
    //   leftCol: boundingBox.left_col * imgWidth,
    //   rightCol: imgWidth - boundingBox.right_col * imgWidth,
    //   topRow: boundingBox.top_row * imgHeight,
    //   bottomRow: imgHeight - boundingBox.bottom_row * imgHeight,
    // };
  };

  //   //uncomment this out
  //   const calculateFaceBox = (data) => {
  //     const firstFace = data[0];
  //     const img = document.getElementById("inputImg");
  //     const imgWidth = Number(img.width);
  //     const imgHeight = Number(img.height);
  //     const boundingBox = firstFace.region_info.bounding_box;
  //     console.log("width/height", imgWidth, imgHeight);
  //     console.log("all data: :", data);
  //     console.log("first data:", firstFace.region_info.bounding_box);
  //     console.log("img data:", imgData);
  //     setBox({
  //       leftCol: boundingBox.left_col * imgWidth,
  //       rightCol: imgWidth - boundingBox.right_col * imgWidth,
  //       topRow: boundingBox.top_row * imgHeight,
  //       bottomRow: imgHeight - boundingBox.bottom_row * imgHeight,
  //     });
  //     // return {
  //     //   leftCol: boundingBox.left_col * imgWidth,
  //     //   rightCol: imgWidth - boundingBox.right_col * imgWidth,
  //     //   topRow: boundingBox.top_row * imgHeight,
  //     //   bottomRow: imgHeight - boundingBox.bottom_row * imgHeight,
  //     // };
  //   };
  // //until here

  // const displayFaceBox = (box) => {
  //   setBox({ box: box });
  //   console.log("box here:", box);
  // };

  useEffect(() => {
    if (input !== "") {
      fetchImageResults(input);
    }
  }, [input]);

  useEffect(() => {
    if (imgData.length > 0) {
      calculateFaceBox(imgData);
      // displayFaceBox(calculateFaceBox(imgData));
    }
  }, [imgData]);

  //async function
  const fetchImageResults = async (inputURL) => {
    const raw = JSON.stringify({
      user_app_id: {
        user_id: "cherrydub",
        app_id: "my-first-application",
      },
      inputs: [
        {
          data: {
            image: {
              url: input,
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: "Key " + apiKey,
      },
      body: raw,
    };

    try {
      const response = await fetch(
        `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
        requestOptions
      );
      const responseText = await response.text();
      const parsedResult = JSON.parse(responseText);
      const data = parsedResult.outputs[0].data.regions;
      setImgData(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  //old fetch way, lets convert to await/async above
  // fetch(
  //   `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
  //   requestOptions
  // )
  //   .then((response) => response.text())
  //   .then((resText) => JSON.parse(resText))
  //   .then((result) => result.outputs[0].data.regions)
  //   .then((data) => console.log(`There are ${data.length} faces:`, data))
  //   .catch((error) => console.log("Error: ", error));

  return (
    <>
      <ParticlesBg color="#ffffff" num={200} type="cobweb" bg={true} />
      {/* <SignIn /> */}
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm setInput={setInput} />

      <FaceRecognition
        input={input}
        imgData={imgData}
        box={box}
        boxes={boxes}
      />
    </>
  );
}

export default App;
