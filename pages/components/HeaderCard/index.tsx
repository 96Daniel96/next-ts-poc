import React from 'react';
import { IconButton } from '@material-ui/core';
import Card from '../../../components/Card';
import GithubIcon from '../../../assets/icons/github';
import LinkedInIcon from '../../../assets/icons/linkedin';
import TwitterIcon from '../../../assets/icons/twitter';
import ColSmImage from './components/ColSmImage';

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
              <div style={{ height: '48px', width: '48px', backgroundColor: '#24292E', borderRadius: '50%' }}>
                <IconButton aria-label="delete">
                  <GithubIcon height="100%" width="100%" />
                </IconButton>
              </div>
              <div style={{ height: '48px', width: '48px', backgroundColor: '#1565C0', borderRadius: '50%' }}>
                <IconButton aria-label="delete">
                  <LinkedInIcon height="100%" width="100%" />
                </IconButton>
              </div>
              <div style={{ height: '48px', width: '48px', backgroundColor: '#2196F3', borderRadius: '50%' }}>
                <IconButton aria-label="delete">
                  <TwitterIcon height="100%" width="100%" />
                </IconButton>
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
