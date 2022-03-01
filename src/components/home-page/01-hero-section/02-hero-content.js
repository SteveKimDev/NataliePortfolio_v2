import * as React from 'react';

import * as HomeStyle from '../home.module.css';

const HersoContent = () => (
  <div className={`${HomeStyle.heroCol1Div}`}>
    <h1 className={HomeStyle.heroTitle}>Hi, I'm Natalie</h1>
    <p className={HomeStyle.heroSubtitle}>
      I ARCHITECT MODERN DIGITAL EXPERIENCE SYSTEMS
    </p>
    <p>
      Ever since I was a young girl, I wanted to help build the cool, futuristic
      tech I saw in movies and on TV. Fast-forward years later - My background
      includes leading rock-star teams to produce amazing software products for
      Fortune 100 giants and bootstrapped start-ups alike. I focus on building
      mobile-first enterprise web systems and omnichannel digital experiences
      for growing companies. I’d love to see what I can help you with!
    </p>
    <a className={`purple-btn float-shadow ${HomeStyle.heroBtn}`} href='/'>
      Let's Chat
    </a>
  </div>
);

export default HersoContent;
