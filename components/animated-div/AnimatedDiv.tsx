import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { Animations, AnimatedDivProps } from ".";
import styles from "./AnimatedDiv.module.scss";

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  animation,
  children,
  className,
  unmountOnDisappear = true,
}) => {
  const [isMounted, setIsMounted] = useState(true);
  const [animatedClass, setAnimatedClass] = useState<string>(
    Animations.get(animation).before
  );

  useEffect(() => {
    setIsMounted(true);
    setAnimatedClass(Animations.get(animation).after);
  }, [animation]);

  return (
    <div
      className={clsx(styles["animated-div"], styles[animatedClass], className)}
      onTransitionEnd={(event) => {
        if (
          event.propertyName === "opacity" &&
          window
            .getComputedStyle(event.currentTarget)
            .getPropertyValue("opacity") === "0"
        ) {
          console.log("is mounted: ", !unmountOnDisappear);
          setIsMounted(!unmountOnDisappear);
        }
      }}
    >
      {isMounted && children}
    </div>
  );
};

export default AnimatedDiv;
