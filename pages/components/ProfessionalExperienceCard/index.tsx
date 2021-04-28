import React from 'react';
import clsx from 'clsx';

//Components
import Card from 'components/Card';
import Timeline from 'components/Timeline';

//Config
import data from 'data.json';

//Styles
import styles from './ProfessionalExperienceCard.module.scss';

const ProfessionalExperienceCard: React.FC<{}> = () => {
  return (
    <Card
      title={'Professional Experience'}
      maxWidth={'47rem'}
      className={styles['professional-experience-card']}
    >
      <div className="container">
        <div className={clsx('row', styles['professional-row'])}>
          <Timeline items={data.professionalExperience} />
        </div>
      </div>
    </Card>
  );
};

export default ProfessionalExperienceCard;
