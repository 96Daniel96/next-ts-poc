import clsx from 'clsx';
import { useMemo } from 'react';

import styles from './styles.module.scss';

type ContainerBackgroundPros = {
  className?: string;
  backgroundImage?: string;
  relative?: boolean;
};

const ContainerBackground: React.FC<ContainerBackgroundPros> = ({
  backgroundImage = '',
  className = '',
  relative = false,
  children,
}) => {
  const image = useMemo(() => {
    if (backgroundImage) {
      return (
        <div className={clsx(styles['image'], { [styles['fixed']]: !relative })}>
          <img src={backgroundImage} />
        </div>
      );
    }
  }, [backgroundImage]);

  return (
    <div className={clsx(className, 'container', { [styles['container-relative']]: relative })}>
      {image}
      {children}
    </div>
  );
};

export default ContainerBackground;
