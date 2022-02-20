import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import HersoContent from './02-hero-content';
import BlueHomeImg from './03-blue-bkgd-img';
import BlueBkgdMobile from './04-blue-bkgd-mobile-img';
import ProfileImg from './05-profile-img';

import * as HomeStyle from '../home.module.css';

const HeroSection = () => (
  <div className={HomeStyle.heroSection}>
    <Row>
      <Col lg={6}>
        <HersoContent />
      </Col>
      <Col className={HomeStyle.heroCol2} lg={6}>
        <BlueHomeImg />
        <BlueBkgdMobile />
        <ProfileImg />
      </Col>
    </Row>
  </div>
);

export default HeroSection;
