import React, { CSSProperties } from "react";
import clsx from "clsx";

import { DContainerProps } from ".";
import styles from "./DContainer.module.scss";

const DContainer: React.FC<DContainerProps> = ({
  config = { flex: 1, direction: "column" },
  style,
  children,
}) => {
  const { flex = 1, direction = "column" } = config;
  return (
    <div
      className={clsx(
        styles["dcontainer"],
        styles[`flex-${flex}`],
        styles[direction]
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default DContainer;
