import { CSSProperties } from "react";

export type AnimatedDivProps = {
  animation: AnimatedDivAnimations;
  unmountOnDisappear?: boolean;
  onHover?: CSSProperties;
  children: any;
};

export type AnimatedCssClass = {
  before: string;
  after: string;
};

export enum AnimatedDivAnimations {
  OPACITY = "OPACITY",
  APPEAR = "APPEAR",
  DISAPPEAR = "DISAPPEAR",
}

export const Animations = new Map<AnimatedDivAnimations, AnimatedCssClass>([
  [
    AnimatedDivAnimations.OPACITY,
    { before: "opacity-before", after: "opacity-after" },
  ],
  [
    AnimatedDivAnimations.APPEAR,
    {
      before: "appear-before",
      after: "appear-after",
    },
  ],
  [
    AnimatedDivAnimations.DISAPPEAR,
    {
      before: "disappear-before",
      after: "disappear-after",
    },
  ],
]);
