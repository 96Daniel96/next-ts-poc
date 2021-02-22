import React, { useState } from "react";
import Image from "next/image";
import AnimatedDiv, { AnimatedDivAnimations } from "../components/animated-div";
import DBackgroundImage from "../components/dbackgroundimage";
import DContainer from "../components/dcontainer";

const Home: React.FC<{}> = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DContainer
        config={{ direction: "row", backgroundImage: "/background.jpg" }}
      >
        <DContainer>
          <span>asd</span>
        </DContainer>
        <DContainer config={{ backgroundImage: "/test.jpg" }}>
          <span>asd</span>
        </DContainer>
      </DContainer>
    </div>
  );
};

export default Home;
