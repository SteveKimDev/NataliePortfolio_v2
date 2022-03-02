import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';
import FadedLogoImg from './02-faded-logo';
import StoryContent from './03-story-content';

import * as HomeStyle from '../home.module.css';

const StorySection = () => (
  <div className={`section ${HomeStyle.storySection}`} id='story'>
    <Parallax speed={-5}>
      <FadedLogoImg />
    </Parallax>
    <StoryContent />
  </div>
);

export default StorySection;
