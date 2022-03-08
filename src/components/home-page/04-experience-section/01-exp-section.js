import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import ExperienceContent from './02-exp-content';
import ExperienceCompanies from './03-exp-companies';

const ExperienceSection = () => (
  <div className={`section`} id='experience'>
    <Parallax speed={5}>
      <ExperienceContent />
    </Parallax>
    <ExperienceCompanies />
  </div>
);

export default ExperienceSection;
