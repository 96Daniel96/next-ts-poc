import React from 'react';

//Components
import Card from '../../components/Card';

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
          <div className="row flex-column-reverse flex-sm-row pt-3 pb-3">
            <div className="col-sm-6 d-flex justify-content-center">
              <div className="d-flex flex-column justify-content-center"></div>
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
              <img src={'/image-placeholder.png'} height={200} width={200} />
            </div>
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
