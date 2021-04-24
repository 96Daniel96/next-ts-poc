import React from 'react';
import Head from 'next/head';

//Components
import Main from './Main';
import ContainerBackground from '../components/ContainerBackground';

//Styles
import styles from './index.module.scss';

const Home: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin%20Sans" rel="stylesheet" />
      </Head>

      <ContainerBackground backgroundImage="/background.jpg" className={styles['home']}>
        <Main />
      </ContainerBackground>
    </>
  );
};

export default Home;
