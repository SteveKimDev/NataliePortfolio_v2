import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as CoachingStyle from './coaching.module.css';

const FloaterDivs = () => (
  <div>
    {/* group 1 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${CoachingStyle.floaterTen}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-15 ${CoachingStyle.floaterEleven}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={1}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${CoachingStyle.floaterTwelve}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
