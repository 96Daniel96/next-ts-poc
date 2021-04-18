import React from 'react';
import Head from 'next/head';

//Components
import DContainer from '../components/dcontainer';
import MainContainer from './components/MainContainer';

//Styles
import styles from './index.module.scss';
import Container from '../components/Container/Container';
import clsx from 'clsx';

const Home: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin%20Sans" rel="stylesheet" />
      </Head>

      <Container backgroundImage="/background.jpg" className={styles['home']} fixed>
        <Container className={clsx('container', styles['scrollable-container'])}></Container>
      </Container>
    </>
  );
};

export default Home;
