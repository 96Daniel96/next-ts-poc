import React from 'react';
import Card from '../../../components/Card';
import GithubIcon from '../../../assets/icons/github';
import LinkedInIcon from '../../../assets/icons/linkedin';
import TwitterIcon from '../../../assets/icons/twitter';
import ColSmImage from './components/ColSmImage';
import SocialButton from './components/SocialButton';

import styles from './HeaderCard.module.scss';

const HeaderCard: React.FC<{}> = () => {
  return (
    <Card maxWidth={'47rem'}>
      <div className="container">
        <div
          className={'row'}
          style={{
            height: '200px',
            position: 'relative',
            zIndex: 1,
            background: 'rgb(81, 59, 44, 0.5)',
            color: 'white',
          }}
        >
          <div className="col-sm-6 d-flex flex-column">
            <span>Daniel Basílio</span>
            <span>Software Engineer / Web Developer</span>
            <span>the.daniel.basilio@gmail.com</span>
            <span>+351 964 180 302</span>

            <div className="col d-flex flex-row">
              <SocialButton className={styles['github-icon']}>
                <GithubIcon height="100%" width="100%" />
              </SocialButton>
              <SocialButton className={styles['linkedin-icon']}>
                <LinkedInIcon height="100%" width="100%" />
              </SocialButton>
              <SocialButton className={styles['twitter-icon']}>
                <TwitterIcon height="100%" width="100%" />
              </SocialButton>
            </div>
          </div>
          <ColSmImage />
        </div>
      </div>
    </Card>
  );
};

export default HeaderCard;
