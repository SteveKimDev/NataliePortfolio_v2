import * as React from 'react';
import StripeImg from './05a-stripe-img';

import * as StackStyle from './tech-stack.module.css';

const StripeStack = () => (
  <div
    className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
  >
    <StripeImg />
  </div>
);

export default StripeStack;
