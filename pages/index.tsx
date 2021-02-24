import Head from "next/head";
import React, { useState } from "react";

import DContainer from "../components/dcontainer";
import AnimatedDiv, { AnimatedDivAnimations } from "../components/animated-div";
import MainContainer from "./components/MainContainer";
import styles from "./index.module.scss";

const Home: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin%20Sans"
          rel="stylesheet"
        />
      </Head>
      <div className={styles["home"]}>
        <DContainer
          config={{
            direction: "row",
            align: { horizontal: "center" },
            backgroundImage: "/background.jpg",
          }}
          style={{ position: "static" }}
        >
          <MainContainer />
        </DContainer>
      </div>
    </>
  );
};

export default Home;
