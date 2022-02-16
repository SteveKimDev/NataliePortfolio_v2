import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import HersoContent from './01a-hero-content';
import BlueBkgdImg from './01b-blue-bkgd-img';
import ProfileImg from './01c-profile-img';

import * as HomeStyle from './home.module.css';

const HeroSection = () => (
  <div>
    <Row className={HomeStyle.heroRow}>
      <Col className={`${HomeStyle.heroCol1}`} lg={6}>
        <HersoContent />
      </Col>
      <Col className={HomeStyle.heroCol2} lg={6}>
        <BlueBkgdImg />
        <ProfileImg />
      </Col>
    </Row>
  </div>
);

export default HeroSection;
