import { useState, useEffect } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import ParticlesBg from "particles-bg";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [input, setInput] = useState("");
  const [imgData, setImgData] = useState([]);
  const [boxes, setBoxes] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [route, setRoute] = useState("signin");

  //this instaed of that component mount shit
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => console.log("here is the data:", data))
      .catch((error) => console.log("Error:", error));
  }, []);

  const calculateFaceBox = (data) => {
    const img = document.getElementById("inputImg");
    const imgWidth = Number(img.width);
    const imgHeight = Number(img.height);

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

    setBoxes(boundingBoxesCalculated);
  };

  const onRouteChange = (route) => {
    if (route === "signout") {
      setIsSignedIn(false);
      setRoute("signin");
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

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
      <ParticlesBg color="#808080" num={200} type="cobweb" bg={true} />
      <Navigation
        onRouteChange={onRouteChange}
        route={route}
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
      />

      <Logo route={route} onRouteChange={onRouteChange} />

      {route === "home" ? (
        <>
          <Rank />
          <ImageLinkForm setInput={setInput} />
          <FaceRecognition input={input} imgData={imgData} boxes={boxes} />
        </>
      ) : route === "signin" ? (
        <SignIn
          // isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}
          onRouteChange={onRouteChange}
          route={route}
        />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </>
  );
}

export default App;
