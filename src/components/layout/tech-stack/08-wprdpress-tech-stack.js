import * as React from 'react';
import WordpressImg from './08a-wordpress-img';

import * as StackStyle from './tech-stack.module.css';

const WordpressStack = () => (
  <div
    className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
  >
    <WordpressImg />
  </div>
);

export default WordpressStack;
