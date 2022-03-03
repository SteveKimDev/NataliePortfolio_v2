import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as HomeStyle from '../home.module.css';

const FloaterDivs = () => (
  <div>
    {/* group 1 */}
    <Parallax speed={-4}>
      <div
        className={`purple-3d purple-floater floater-30 ${HomeStyle.floaterSeven}`}
      />
      <div
        className={`purple-3d purple-floater floater-15 ${HomeStyle.floaterEight}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater floater-30 ${HomeStyle.floaterNine}`}
      />
      <div
        className={`purple-3d purple-floater floater-20 ${HomeStyle.floaterTen}`}
      />
      <div
        className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterEleven}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater floater-25 ${HomeStyle.floaterTwelve}`}
      />
      <div
        className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterThirteen}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
