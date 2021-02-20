import { CSSProperties } from "react";

export type DContainerFlex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type DContainerDirection = "column" | "row";

export type DContainerConfig = {
  flex?: DContainerFlex;
  direction?: DContainerDirection;
};

export type DContainerProps = {
  config?: DContainerConfig;
  style?: CSSProperties;
};
