import * as React from 'react';
import NetlifyImg from './07a-netlify-img';

import * as StackStyle from './tech-stack.module.css';

const NetlifyStack = () => (
  <div
    className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
  >
    <NetlifyImg />
  </div>
);

export default NetlifyStack;
