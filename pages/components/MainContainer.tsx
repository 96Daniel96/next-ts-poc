import React from 'react';

//Styles
import styles from './MainContainer.module.scss';

const MainContainer: React.FC<{}> = () => {
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
