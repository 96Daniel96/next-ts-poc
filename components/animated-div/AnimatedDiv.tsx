import React from "react";
import { CSSProperties, useEffect, useMemo, useState } from "react";
import { Animations, AnimatedDivProps } from ".";
import styles from "./AnimatedDiv.module.scss";

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  animation,
  unmountOnDisappear = true,
  children,
}) => {
  const [isMounted, setIsMounted] = useState(true);
  const [mainStyle, setMainStyle] = useState<CSSProperties>(
    Animations.get(animation).before
  );

  useEffect(() => {
    setIsMounted(true);
    setMainStyle(Animations.get(animation).after);
  }, [animation]);

  return (
    <div
      className={styles["animated-div"]}
      style={{ ...mainStyle }}
      onTransitionEnd={(event) => {
        if (event.propertyName === "opacity" && !mainStyle.opacity) {
          setIsMounted(!unmountOnDisappear);
        }
      }}
    >
      {isMounted && children}
    </div>
  );
};

export default AnimatedDiv;
