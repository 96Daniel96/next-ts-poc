import React from 'react';

//Components
import Card from 'components/Card';
import HeaderCard from 'pages/components/HeaderCard';
import SkillsCard from 'pages/components/SkillsCard';
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
      <SkillsCard />
      <Card title="PROFESSIONAL EXPERIENCE"></Card>
      <Card title="MORE/INTERESTS"></Card>
      <Card title="CONTACT"></Card>
    </div>
  );
};

export default Main;
