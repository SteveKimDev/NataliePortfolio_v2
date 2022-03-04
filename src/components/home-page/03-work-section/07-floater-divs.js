import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as WorkStyle from './work.module.css';

const FloaterDivs = () => (
  <div>
    {/* group 1 */}
    <Parallax speed={-4}>
      <div
        className={`purple-3d purple-floater floater-30 ${WorkStyle.floaterSeven}`}
      />
      <div
        className={`purple-3d purple-floater floater-15 ${WorkStyle.floaterEight}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater floater-30 ${WorkStyle.floaterNine}`}
      />
      <div
        className={`purple-3d purple-floater floater-20 ${WorkStyle.floaterTen}`}
      />
      <div
        className={`purple-3d purple-floater floater-10 ${WorkStyle.floaterEleven}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater floater-25 ${WorkStyle.floaterTwelve}`}
      />
      <div
        className={`purple-3d purple-floater floater-10 ${WorkStyle.floaterThirteen}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
