import React from 'react';
import Head from 'next/head';

//Styles
import styles from './index.module.scss';
import ContainerBackground from '../components/ContainerBackground';

const Home: React.FC<{}> = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin%20Sans" rel="stylesheet" />
      </Head>

      <ContainerBackground backgroundImage="/background.jpg" className={styles['home']}></ContainerBackground>
    </>
  );
};

export default Home;
