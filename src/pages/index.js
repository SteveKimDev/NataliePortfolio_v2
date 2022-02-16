import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

import HeroSection from '../components/home-page/01-hero-section';

const HomePage = () => (
  <div>
    <Layout>
      <Seo title='Natalie Cervantes' />
      <HeroSection />
    </Layout>
  </div>
);

export default HomePage;
