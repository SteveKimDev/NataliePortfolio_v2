import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as HomeStyle from '../home.module.css';

const FloaterDivs = () => (
  <div className={`floater-fade-in`}>
    {/* group 1 */}
    <Parallax speed={5}>
      <div
        className={`purple-3d purple-floater floater-30 ${HomeStyle.floaterOne}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={3}>
      <div
        className={`purple-3d purple-floater floater-25 ${HomeStyle.floaterTwo}`}
      />
      <div
        className={`purple-3d purple-floater floater-15 ${HomeStyle.floaterThree}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={4}>
      <div
        className={`purple-3d purple-floater floater-20 ${HomeStyle.floaterFour}`}
      />
      <div
        className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterFive}`}
      />
    </Parallax>

    {/* group 4 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterSix}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
