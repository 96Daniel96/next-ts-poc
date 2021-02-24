import React, { useState } from "react";
import AnimatedDiv, {
  AnimatedDivAnimations,
} from "../../components/animated-div";
import DContainer from "../../components/dcontainer";

const MainContainer: React.FC<{}> = () => {
  return (
    /* <div
      className="container"
      style={{
        width: "65%",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        height: "800px",
      }}
    >
      <AnimatedDiv animation={AnimatedDivAnimations.APPEAR}>
        <div
          style={{
            height: "50vh",
            marginTop: "20vh",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          }}
        >
          <div class="container">asd</div>
        </div>
      </AnimatedDiv>
    </div> */
    <div
      className="example-container"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.12)",
      }}
    >
      <div className="example-row">
        <div className="example-content-main">Main content</div>
        <div className="example-content-secondary">Secondary content</div>
      </div>
    </div>
  );
};

export default MainContainer;
