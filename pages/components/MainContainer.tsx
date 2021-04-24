import React from 'react';

import styles from './MainContainer.module.scss';

//Components
import Card from '../../components/Card';
import ColSmImage from './ColSmImage';

const MainContainer: React.FC<{}> = () => {
  return (
    <div
      className={'container'}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      }}
    >
      <Card maxWidth={'47rem'}>
        <div className="container">
          <div
            className={'row'}
            style={{
              height: '200px',
              position: 'relative',
              zIndex: 1,
              background: '#06A763',
            }}
          >
            <div className="col-sm-6"></div>
            <ColSmImage />
          </div>
        </div>
      </Card>
      <Card title="INTRODUCTION"></Card>
      <Card title="EDUCATION"></Card>
      <Card title="SKILLS"></Card>
      <Card title="PROFESSIONAL EXPERIENCE"></Card>
      <Card title="MORE/INTERESTS"></Card>
      <Card title="CONTACT"></Card>
    </div>
  );
};

export default MainContainer;
