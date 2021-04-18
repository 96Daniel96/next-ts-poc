import React, { CSSProperties, useMemo } from "react";
import clsx from "clsx";

import { DContainerProps } from ".";
import styles from "./DContainer.module.scss";

const DContainer: React.FC<DContainerProps> = ({
  config = {
    flex: 1,
    direction: "column",
    align: { horizontal: "flex-start", vertical: "flex-start" },
  },
  style,
  children,
}) => {
  const {
    flex = 1,
    direction = "column",
    backgroundImage,
    align = { horizontal: "", vertical: "" },
  } = config;

  const image = useMemo(() => {
    if (backgroundImage) {
      return (
        <div className={styles["dcontainer__image"]}>
          <img src={backgroundImage} />
        </div>
      );
    }
  }, [backgroundImage]);

  return (
    <div
      className={clsx(
        styles["dcontainer"],
        styles[`d-flex-${flex}`],
        styles[`d-direction-${direction}`],
        styles[`d-justify-${align.horizontal}`],
        styles[`d-align-${align.vertical}`]
      )}
      style={style}
    >
      {image}
      {children}
    </div>
  );
};

export default DContainer;
