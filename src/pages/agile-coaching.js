import React from 'react';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';
import AgileCoachingIntro from '../components/agile-coaching/01-agile-coaching-intro';
import ToolsAndPractices from '../components/agile-coaching/02-tools-and-practices';

const HomePage = () => (
  <div>
    <Layout>
      <Seo title='Agile Coaching' />
      <AgileCoachingIntro />
      <ToolsAndPractices />
    </Layout>
  </div>
);

export default HomePage;
