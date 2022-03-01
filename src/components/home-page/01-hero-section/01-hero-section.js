import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';
import HersoContent from './02-hero-content';
import ProfileImg from './03-profile-img';
import HeroImg1 from './04-hero-img-1';
import HeroImg2 from './05-hero-img-2';
import HeroImg3 from './06-hero-img-3';
import HeroImg4 from './07-hero-img-4';

import * as HomeStyle from '../home.module.css';

const HeroSection = () => (
  <div className={HomeStyle.heroSection}>
    <Row>
      <Col lg={6}>
        <HersoContent />
      </Col>
      <Col className={` ${HomeStyle.heroCol2}`} lg={6}>
        <div className={HomeStyle.heroCol2Div}></div>
        <div className={`floater-fade-in`}>
          <div
            className={`purple-3d purple-floater floater-30 ${HomeStyle.floaterOne}`}
          />
          <div
            className={`purple-3d purple-floater floater-25 ${HomeStyle.floaterTwo}`}
          />
          <div
            className={`purple-3d purple-floater floater-15 ${HomeStyle.floaterThree}`}
          />
          <div
            className={`purple-3d purple-floater floater-20 ${HomeStyle.floaterFour}`}
          />
          <div
            className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterFive}`}
          />
          <div
            className={`purple-3d purple-floater floater-10 ${HomeStyle.floaterSix}`}
          />
        </div>
        <ProfileImg />
        <Parallax speed={-2}>
          <HeroImg1 />
        </Parallax>
        <Parallax speed={-1}>
          <HeroImg2 />
        </Parallax>
        <Parallax speed={-1}>
          <HeroImg3 />
        </Parallax>
        <Parallax speed={-2}>
          <HeroImg4 />
        </Parallax>
      </Col>
    </Row>
  </div>
);

export default HeroSection;
