import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <>
      <ParticlesBg color="#ffffff" num={200} type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />

      {/* <FaceRecognition /> */}
    </>
  );
}

export default App;
