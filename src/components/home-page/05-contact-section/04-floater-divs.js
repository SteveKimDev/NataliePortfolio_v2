import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as ContactStyle from './contact.module.css';

const FloaterDivs = () => (
  <div className={`floater-fade-in`}>
    {/* group 1 */}
    <Parallax speed={-3}>
      <div
        className={`purple-3d purple-floater floater-30 ${ContactStyle.floaterOne}`}
      />
      <div
        className={`purple-3d purple-floater floater-15 ${ContactStyle.floaterTwo}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater floater-15 ${ContactStyle.floaterThree}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={-4}>
      <div
        className={`purple-3d purple-floater floater-10 ${ContactStyle.floaterFour}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
