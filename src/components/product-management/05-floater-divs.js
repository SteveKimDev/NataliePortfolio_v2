import * as React from 'react';
import { Parallax } from 'react-scroll-parallax';

import * as ProdMgmtStyle from './prod-mgmt.module.css';

const FloaterDivs = () => (
  <div>
    {/* group 1 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater05 floater-30 ${ProdMgmtStyle.floater1}`}
      />
    </Parallax>

    {/* group 2 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater1 floater-10 ${ProdMgmtStyle.floater2}`}
      />
    </Parallax>

    {/* group 3 */}
    <Parallax speed={3}>
      <div
        className={`purple-3d purple-floater0 floater-25 ${ProdMgmtStyle.floater3}`}
      />
    </Parallax>

    {/* group 4 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${ProdMgmtStyle.floater4}`}
      />
    </Parallax>

    {/* group 5 */}
    <Parallax speed={-2}>
      <div
        className={`purple-3d purple-floater1 floater-30 ${ProdMgmtStyle.floater5}`}
      />
    </Parallax>

    {/* group 6 */}
    <Parallax speed={-1}>
      <div
        className={`purple-3d purple-floater0 floater-20 ${ProdMgmtStyle.floater6}`}
      />
    </Parallax>

    {/* group 7 */}
    <Parallax speed={2}>
      <div
        className={`purple-3d purple-floater05 floater-10 ${ProdMgmtStyle.floater7}`}
      />
    </Parallax>
  </div>
);

export default FloaterDivs;
