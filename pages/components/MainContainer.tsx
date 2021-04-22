import React from 'react';

import styles from './MainContainer.module.scss';

//Components
import Card from '../../components/Card';
import DivRightImage from './DivRightImage';

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
          <DivRightImage />
          {/* <div className="row flex-column-reverse flex-sm-row pt-3 pb-3">
            <div className="col-sm-6 d-flex justify-content-center">
              <div className="d-flex flex-column justify-content-center">
                <p>asdas</p>
                <p>asdas</p>
                <p>asdas</p>
                <p>asdas</p>
              </div>
            </div>
            <div className="col-sm-6 d-flex justify-content-center position-relative">
              <DivRightImage />
            </div>
          </div> */}
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
