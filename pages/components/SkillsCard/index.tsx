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
            <div className="d-flex flex-column justify-content-center">
              <span>Title 1</span>
              <div
                className="skillbar"
                style={{ backgroundColor: 'rgb(81, 59, 44)', transitionProperty: 'width, background-color' }}
              >
                {/*  <div className="skillbar-title">
                  <span>HTML5</span>
                </div> */}
                <div
                  className="skillbar-bar"
                  style={{
                    width: '61%',
                    visibility: 'visible',
                    transform: 'scale(1)',
                    opacity: 0,
                    transition:
                      'transform 1.8s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s, opacity 1.8s cubic-bezier(0.6, 0.2, 0.1, 1) 0.3s',
                    height: '4px',
                    backgroundColor: 'white',
                  }}
                ></div>
                {/* <div className="skill-bar-percent">90%</div> */}
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex flex-column justify-content-center">
              <span>Title 2</span>
            </div>
          </div>
          <div className="col-md">
            <div className="d-flex flex-column justify-content-center">
              <span>Title 3</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SkillsCard;
