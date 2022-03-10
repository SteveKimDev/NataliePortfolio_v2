import * as React from 'react';
import CalendlyImg from './09a-calendly-img';

import * as StackStyle from './tech-stack.module.css';

const CalendlyStack = () => (
  <div
    className={`content-align-center float-shadow white-btn ${StackStyle.stackDiv}`}
  >
    <CalendlyImg />
  </div>
);

export default CalendlyStack;
