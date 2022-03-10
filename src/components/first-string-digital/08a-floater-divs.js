import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as FSDStyle from './fsd.module.css';

const FloaterDivs = () => (
  <div>
    {/* group 18*/}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater05 floater-30 ${FSDStyle.floater8}`}
      />
    </Parallax>

    {/* group 9 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${FSDStyle.floater9}`}
      />
    </Parallax>

    {/* group 10 */}
    <Parallax speed={3}>
      <div
        className={`purple-3d purple-floater0 floater-25 ${FSDStyle.floater10}`}
      />
    </Parallax>

    {/* group 11 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${FSDStyle.floater11}`}
      />
    </Parallax>

    {/* group 12 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater1 floater-30 ${FSDStyle.floater12}`}
      />
    </Parallax>

    {/* group 13 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${FSDStyle.floater13}`}
      />
    </Parallax>

    {/* group 14 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${FSDStyle.floater14}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
