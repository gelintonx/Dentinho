import React, { Fragment } from "react";
import "../styles/Hero.css";
import "animate.css";

import GLTFViewer from "./GLTFViewer";
import HeroViewer from "./HeroViewer";

const Hero = () => {
  return (
    <Fragment>
      <div className="hero-container">
        <h1 className="animate__animated animate__backInDown hero-title">Dentinho</h1>
        <div className="viewer-wrapper">
          <HeroViewer gltfUrl={"/models/hero/boca.glb"} />
        </div>
      </div>
      <div className="gltf-container">
        <GLTFViewer gltfUrl={"/models/root/raiz.glb"} />
      </div>
    </Fragment>
  );
};

export default Hero;
