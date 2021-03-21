import React, { useState } from 'react';
import AnimatedDiv, { AnimatedDivAnimations } from '../../components/animated-div';
import styles from './MainContainer.module.scss';

const MainContainer: React.FC<{}> = () => {
  const t = data => {
    const t2 = 2;
  };
  return (
    <div
      className={styles['main-container']}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      }}
    >
      <div className={styles['main-row']}>
        <div className={styles['main-col']}></div>
      </div>
    </div>
  );
};

export default MainContainer;
