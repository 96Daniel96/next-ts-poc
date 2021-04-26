import React from 'react';
import clsx from 'clsx';

//Components
import Card from 'components/Card';

//Config
import data from 'data.json';

//Styles
import styles from './IntroductionCard.module.scss';

const IntroductionCard: React.FC<{}> = () => {
  const { introduction } = data;

  return (
    <Card maxWidth={'47rem'} className={styles['introduction-card']}>
      <div className="container">
        <div className={clsx('row', styles['introduction-row'])}>{introduction}</div>
      </div>
    </Card>
  );
};

export default IntroductionCard;
