import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import HersoContent from './02-hero-content';
import FloaterDivs from './08-floater-divs';
import ProfileImg from './03-profile-img';
import HeroImg1 from './04-hero-img-1';
import HeroImg2 from './05-hero-img-2';
import HeroImg3 from './06-hero-img-3';
import HeroImg4 from './07-hero-img-4';

import * as HomeStyle from '../home.module.css';

const HeroSection = () => (
  <div>
    <Row>
      <Col lg={6}>
        <HersoContent />
      </Col>
      <Col className={` ${HomeStyle.heroCol2}`} lg={6}>
        <div className={HomeStyle.heroCol2Div}></div>
        <FloaterDivs />
        <ProfileImg />
        <Parallax speed={-3}>
          <HeroImg1 />
        </Parallax>
        <Parallax speed={-2}>
          <HeroImg2 />
        </Parallax>
        <Parallax speed={-2}>
          <HeroImg3 />
        </Parallax>
        <Parallax speed={-3}>
          <HeroImg4 />
        </Parallax>
      </Col>
    </Row>
  </div>
);

export default HeroSection;
