import React from 'react';

import styles from './Main.module.scss';
import GithubIcon from '../../assets/icons/github';
import LinkedInIcon from '../../assets/icons/linkedin';
import TwitterIcon from '../../assets/icons/twitter';

//Components
import Card from '../../components/Card';
import HeaderCard from '../components/HeaderCard';

const Main: React.FC<{}> = () => {
  return (
    <div
      className={'container'}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
      }}
    >
      <HeaderCard />
      <Card title="INTRODUCTION"></Card>
      <Card title="EDUCATION"></Card>
      <Card title="SKILLS"></Card>
      <Card title="PROFESSIONAL EXPERIENCE"></Card>
      <Card title="MORE/INTERESTS"></Card>
      <Card title="CONTACT"></Card>
    </div>
  );
};

export default Main;
