import React, { CSSProperties, useMemo } from "react";
import clsx from "clsx";

import { DContainerProps } from ".";
import styles from "./DContainer.module.scss";

const DContainer: React.FC<DContainerProps> = ({
  config = { flex: 1, direction: "column" },
  style,
  children,
}) => {
  const {
    flex = 1,
    direction = "column",
    backgroundImage,
    align: { horizontal, vertical },
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
  console.log("styles[horizontal]", styles[`d-justify-${horizontal}`]);
  return (
    <div
      className={clsx(
        styles["dcontainer"],
        styles[`d-flex-${flex}`],
        styles[direction],
        styles[`d-justify-${horizontal}`]
      )}
      style={style}
    >
      {image}
      {children}
    </div>
  );
};

export default DContainer;
