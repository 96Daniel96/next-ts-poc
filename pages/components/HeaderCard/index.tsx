import React from 'react';
import clsx from 'clsx';

//Components
import Card from 'components/Card';
import Text from 'components/Text';
import ColSmImage from './components/ColSmImage';
import SocialButton from './components/SocialButton';

//Config
import data from 'data.json';

//Icons
import GithubIcon from 'assets/icons/github';
import TwitterIcon from 'assets/icons/twitter';
import LinkedInIcon from 'assets/icons/linkedin';

//Styles
import styles from './HeaderCard.module.scss';

const HeaderCard: React.FC<{}> = () => {
  const {
    basic: { name, role, email, phone },
  } = data;

  return (
    <Card maxWidth={'47rem'}>
      <div className="container">
        <div className={clsx('row', styles['header-row'])}>
          <div className={clsx('col-sm-6 ')}>
            <div className={clsx('d-flex flex-column', styles['header-content'])}>
              <Text className={clsx(styles['name-span'])}>{name}</Text>
              <Text className={clsx(styles['role-span'])}>{role}</Text>
              <Text className={clsx(styles['info-span'])}>{email}</Text>
              <Text className={clsx(styles['info-span'])}>{phone}</Text>
              <div className={clsx('col d-flex flex-row', styles['icons-container'])}>
                <SocialButton
                  className={clsx(styles['icon'], styles['github-icon'])}
                  onClick={() => {
                    window.open('https://github.com/96Daniel96', '_blank');
                  }}
                >
                  <GithubIcon height="100%" width="100%" />
                </SocialButton>
                <SocialButton
                  className={clsx(styles['icon'], styles['linkedin-icon'])}
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/daniell-basillio', '_blank');
                  }}
                >
                  <LinkedInIcon height="100%" width="100%" />
                </SocialButton>
                <SocialButton
                  className={clsx(styles['icon'], styles['twitter-icon'])}
                  onClick={() => {
                    window.open('https://twitter.com/Daniel_Bsl', '_blank');
                  }}
                >
                  <TwitterIcon height="100%" width="100%" />
                </SocialButton>
              </div>
            </div>
          </div>
          <ColSmImage />
        </div>
      </div>
    </Card>
  );
};

export default HeaderCard;
