import * as React from 'react';

import * as HomeStyle from '../home.module.css';

const FloaterDivs = () => (
  <div>
    <div
      className={`purple-3d purple-floater floater-30 ${HomeStyle.floaterSeven}`}
    />
    <div
      className={`purple-3d purple-floater floater-15 ${HomeStyle.floaterEight}`}
    />
    <div
      className={`purple-3d purple-floater floater-30 ${HomeStyle.floaterNine}`}
    />
    <div
      className={`purple-3d purple-floater floater-20 ${HomeStyle.floaterTen}`}
    />
    <div
      className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterEleven}`}
    />
    <div
      className={`purple-3d purple-floater floater-25 ${HomeStyle.floaterTwelve}`}
    />
    <div
      className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterThirteen}`}
    />
  </div>
);

export default FloaterDivs;
