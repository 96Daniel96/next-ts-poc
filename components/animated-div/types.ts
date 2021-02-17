import { CSSProperties } from "react";

export type AnimatedDivProps = {
  animation: AnimatedDivAnimations;
  unmountOnDisappear?: boolean;
  onHover?: CSSProperties;
  children: any;
};

export type AnimatedCss = {
  before: CSSProperties;
  after: CSSProperties;
};

export enum AnimatedDivAnimations {
  OPACITY = "OPACITY",
  APPEAR = "APPEAR",
  DISAPPEAR = "DISAPPEAR",
}

export const Animations = new Map<AnimatedDivAnimations, AnimatedCss>([
  [
    AnimatedDivAnimations.OPACITY,
    { before: { opacity: 0 }, after: { opacity: 1 } },
  ],
  [
    AnimatedDivAnimations.APPEAR,
    {
      before: { opacity: 0, marginTop: "-100px" },
      after: { opacity: 1, marginTop: "0px" },
    },
  ],
  [
    AnimatedDivAnimations.DISAPPEAR,
    {
      before: { opacity: 1, marginTop: "0px" },
      after: { opacity: 0, marginTop: "-100px" },
    },
  ],
]);
