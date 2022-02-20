import * as React from 'react';
import FadedLogoImg from './02-faded-logo';
import StoryContent from './03-story-content';

import * as HomeStyle from '../home.module.css';

const StorySection = () => (
  <div className={HomeStyle.storySection}>
    <FadedLogoImg />
    <StoryContent />
  </div>
);

export default StorySection;
