import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import HeroSection from '../components/home-page/01-hero-section/01-hero-section';
import StorySection from '../components/home-page/02-story-section/01-story-section';
import WorkSection from '../components/home-page/03-work-section/01-work-section';

const HomePage = () => (
  <div>
    <Layout>
      <Seo title='Natalie Cervantes' />
      <HeroSection />
      <StorySection />
      <WorkSection />
    </Layout>
  </div>
);

export default HomePage;
