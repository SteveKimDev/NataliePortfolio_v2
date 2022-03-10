import * as React from 'react';
import ContentfulImg from './04a-contentful-img';

import * as StackStyle from './tech-stack.module.css';

const ContentfulStack = () => (
  <div
    className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
  >
    <ContentfulImg />
  </div>
);

export default ContentfulStack;
