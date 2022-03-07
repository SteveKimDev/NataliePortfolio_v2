import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as HeroStyle from './hero.module.css';

const FloaterDivs = () => (
  <div className={`floater-fade-in`}>
    {/* group 1 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater05 floater-30 ${HeroStyle.floaterOne}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater1 floater-25 ${HeroStyle.floaterTwo}`}
      />
      <div
        className={`purple-3d purple-floater0 floater-15 ${HeroStyle.floaterThree}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={-4}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${HeroStyle.floaterFour}`}
      />
      <div
        className={`purple-3d purple-floater1 floater-10 ${HeroStyle.floaterFive}`}
      />
    </Parallax>

    {/* group 4 */}
    <Parallax speed={-5}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${HeroStyle.floaterSix}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
