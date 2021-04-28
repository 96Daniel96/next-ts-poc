import React from 'react';

//Components
import HeaderCard from 'pages/components/HeaderCard';
import SkillsCard from 'pages/components/SkillsCard';
import EducationCard from 'pages/components/EducationCard';
import IntroductionCard from 'pages/components/IntroductionCard';
import ProfessionalExperienceCard from 'pages/components/ProfessionalExperienceCard';

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
      <ProfessionalExperienceCard />
    </div>
  );
};

export default Main;
