import { CSSProperties } from "react";

export type DContainerFlex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type DContainerDirection = "column" | "row";
export type DContainerAlignItems = "center" | "flex-start" | "flex-end";
export type DContainerJustifyContent =
  | DContainerAlignItems
  | "space-around"
  | "space-between";

export type DContainerConfig = {
  flex?: DContainerFlex;
  direction?: DContainerDirection;
  align?: {
    vertical?: DContainerAlignItems;
    horizontal?: DContainerJustifyContent;
  };
  backgroundImage?: string;
};

export type DContainerProps = {
  config?: DContainerConfig;
  style?: CSSProperties;
};
