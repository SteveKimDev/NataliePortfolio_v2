import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import Intro from '../components/first-string-digital/01-intro';
import FsdImg1Section from '../components/first-string-digital/02-fsd-img-section';
import TechStackSection from '../components/first-string-digital/04-techstack-section';

const FSDPage = () => (
  <div>
    <Layout>
      <Seo title='First String Digital Web Project' />
      <Intro />
      <FsdImg1Section />
      <TechStackSection />
    </Layout>
  </div>
);

export default FSDPage;
