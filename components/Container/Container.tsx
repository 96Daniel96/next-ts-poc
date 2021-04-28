import React, { useMemo } from 'react';
import clsx from 'clsx';

//Components

//Services

//Styles
import styles from './Container.module.scss';

type ContainerPros = {
  className?: string;
  backgroundImage?: string;
  fixed?: boolean;
};

const Container: React.FC<ContainerPros> = ({
  className = 'container',
  backgroundImage,
  fixed,
  children,
}) => {
  const image = useMemo(() => {
    if (backgroundImage) {
      return (
        <div className={clsx(styles['container_image'], { [styles['fixed']]: fixed })}>
          <img src={backgroundImage} alt='Container background image'/>
        </div>
      );
    }
  }, [backgroundImage]);

  return (
    <div className={clsx(styles['container'], className)}>
      {image}
      {children}
    </div>
  );
};

export default Container;
