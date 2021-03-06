import React from 'react';
import clsx from 'clsx';

//Components
import Card from 'components/Card';
import Timeline from 'components/Timeline';

//Config
import data from 'data.json';

//Styles
import styles from './EducationCard.module.scss';

const EducationCard: React.FC<{}> = () => {
  return (
    <Card title={'Education'} maxWidth={'47rem'} className={styles['education-card']}>
      <div className="container">
        <div className={clsx('row', styles['education-row'])}>
          <Timeline items={data.education} />
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
