import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

import BlueHomeImg from '../components/home-page/01b-blue-home-img';
import HeroSection from '../components/home-page/01-hero-section';

import * as HomeStyle from '../components/home-page/home.module.css';

const HomePage = () => (
  <div className={HomeStyle.homeSection}>
    <BlueHomeImg />
    <Layout>
      <Seo title='Natalie Cervantes' />
      <HeroSection />
    </Layout>
  </div>
);

export default HomePage;
