import React from 'react';
import clsx from 'clsx';

//Components
import Card from 'components/Card';
import Timeline from 'components/Timeline';

//Config
import data from 'data.json';

//Styles
import styles from './SkillsCard.module.scss';

const SkillsCard: React.FC<{}> = () => {
  return (
    <Card title={'Skills'} maxWidth={'47rem'} className={styles['skills-card']}>
      <div className="container">
        <div className={clsx('row', styles['skills-row'])}>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <span>Title 1</span>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <span>Title 2</span>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex justify-content-center">
              <span>Title 3</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillsCard;
