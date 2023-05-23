import { useState, useEffect } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import ParticlesBg from "particles-bg";

function App() {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input !== "") {
      fetchImageResults(input);
    }
  }, [input]);

  const fetchImageResults = (input) => {
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
        Authorization: "Key " + process.env.REACT_APP_API_KEY,
      },
      body: raw,
    };

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log("SUCCESSSSSSS DUDEEEEE:" + result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <ParticlesBg color="#ffffff" num={200} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm setInput={setInput} />

      {/* <FaceRecognition /> */}
      {console.log(input)}
    </>
  );
}

export default App;
