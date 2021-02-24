import React, { useState } from "react";
import AnimatedDiv, {
  AnimatedDivAnimations,
} from "../../components/animated-div";
import DContainer from "../../components/dcontainer";

const MainContainer: React.FC<{}> = () => {
  return (
    <div
      style={{
        height: "800px",
        width: "50%",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
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
          <DContainer config={{ flex: 1, direction: "row" }}>
            {/* Profile Info */}
            <DContainer config={{ flex: 3 }}>
              <DContainer config={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "Josefin Sans, serif",
                    fontSize: "46px",
                  }}
                >
                  Daniel Basilio
                </span>
              </DContainer>
              <DContainer config={{ flex: 1 }}>
                <span
                  style={{
                    fontFamily: "Josefin Sans, serif",
                    fontSize: "24px",
                  }}
                >
                  Software Engineer / Frontend Developer
                </span>
              </DContainer>
            </DContainer>
            {/* Profile Image */}
            <DContainer
              config={{
                flex: 2,
                align: { horizontal: "center", vertical: "center" },
              }}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
            >
              <div
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.25)",
                  height: "100px",
                  width: "100px",
                }}
              >
                img
              </div>
            </DContainer>
          </DContainer>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default MainContainer;
