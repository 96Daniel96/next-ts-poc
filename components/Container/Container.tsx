import React, { useMemo } from 'react';
import clsx from 'clsx';

//Components

//Services

//Styles
import styles from './Container.module.scss';

type ContainerPros = {
  className?: string;
  backgroundImage?: string;
};

const Container: React.FC<ContainerPros> = ({ className = 'container', backgroundImage, children }) => {
  const image = useMemo(() => {
    if (backgroundImage) {
      return (
        <div className={styles['container_image']}>
          <img src={backgroundImage} />
        </div>
      );
    }
  }, [backgroundImage]);

  return (
    <div /* style={{ height: '500px' }} */ className={clsx(styles['container'], className)}>
      {image}
      {children}
    </div>
  );
};

export default Container;
