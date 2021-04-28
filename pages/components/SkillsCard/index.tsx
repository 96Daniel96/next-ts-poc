import React from 'react';
import clsx from 'clsx';

//Components
import Card from 'components/Card';
import ProgressBar from 'components/ProgressBar';

//Config
import data from 'data.json';

//Styles
import styles from './SkillsCard.module.scss';

const SkillsCard: React.FC<{}> = () => {
  return (
    <Card title={'Skills'} maxWidth={'47rem'} className={styles['skills-card']}>
      <div className="container">
        <div className={clsx('row', styles['skills-row'])}>
          {data.skills.map((section, i) => (
            <div key={`${section.sectionTitle}_${i}`} className={clsx('col-md', styles['skills-column'])}>
              <div className="d-flex flex-column justify-content-center">
                <h5 className={'d-flex justify-content-center'}>{section.sectionTitle}</h5>
                {section.elements.map((elem, j) => (
                  <ProgressBar key={`${elem.name}_${j}`} title={elem.name} progress={elem.progress} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SkillsCard;
