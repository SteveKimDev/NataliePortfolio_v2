import * as React from 'react';

import * as HomeStyle from '../home.module.css';

const ExperienceSection = () => (
  <div className={`section ${HomeStyle.expSection}`} id='experience'>
    <h3 className={`section-title text-align-center mb-2rem`}>Experience</h3>
    <p className={`text-align-center ${HomeStyle.workDescription}`}>
      I’ve worked with and led rock-star agile teams to produce next-level
      applications and experiences for clients such as:
    </p>
  </div>
);

export default ExperienceSection;
