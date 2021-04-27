import React from 'react';

//Components
import Card from '../../components/Card';
import HeaderCard from '../components/HeaderCard';
import EducationCard from 'pages/components/EducationCard';
import IntroductionCard from 'pages/components/IntroductionCard';

const Main: React.FC<{}> = () => {
  return (
    <div
      className={'container'}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      }}
    >
      <HeaderCard />
      <IntroductionCard />
      <EducationCard />
      <Card title="SKILLS"></Card>
      <Card title="PROFESSIONAL EXPERIENCE"></Card>
      <Card title="MORE/INTERESTS"></Card>
      <Card title="CONTACT"></Card>
    </div>
  );
};

export default Main;
