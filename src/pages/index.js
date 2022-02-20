import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import HeroSection from '../components/home-page/01-hero-section/01-hero-section';
import StorySection from '../components/home-page/02-story-section/01-story-section';

const HomePage = () => (
  <div>
    <Layout>
      <Seo title='Natalie Cervantes' />
      <HeroSection />
      <StorySection />
    </Layout>
  </div>
);

export default HomePage;
