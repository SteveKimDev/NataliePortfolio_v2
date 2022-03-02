import * as React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import WorkImg1 from './02-work-img-1';
import WorkImg2 from './03-work-img-2';
import WorkImg3 from './04-work-img-3';
import WorkImg4 from './05-work-img-4';

import * as HomeStyle from '../home.module.css';

const WorkSection = () => (
  <div className={`section ${HomeStyle.workSection}`}>
    <h3 className={`section-title text-align-center mb-2rem`}>Work</h3>
    <p className={`text-align-center ${HomeStyle.workDescription}`}>
      I’m excited to share with you some of my accomplishments. Tap the icons
      below to learn more about my Agile coaching work, my experience as a
      Digital Product Manager, or take a look at some of my favorite personal
      web projects so far!
    </p>
    <Row className={HomeStyle.workRow}>
      <Col lg={3} sm={6}>
        <div className={`float-shadow white-btn ${HomeStyle.workTab}`}>
          <WorkImg1 />
          <Link
            to='/'
            className={`float-shadow purple-btn ${HomeStyle.workLink}`}
          >
            Agile Coaching
          </Link>
        </div>
      </Col>
      <Col lg={3} sm={6}>
        <div className={`float-shadow white-btn ${HomeStyle.workTab} `}>
          <WorkImg2 />
          <Link
            to='/'
            className={`float-shadow purple-btn ${HomeStyle.workLink}`}
          >
            Product Management
          </Link>
        </div>
      </Col>
      <Col lg={3} sm={6}>
        <div className={`float-shadow white-btn ${HomeStyle.workTab} `}>
          <WorkImg3 />
          <Link
            to='/'
            className={`float-shadow purple-btn ${HomeStyle.workLink}`}
          >
            First String Web Project
          </Link>
        </div>
      </Col>
      <Col lg={3} sm={6}>
        <div className={`float-shadow white-btn ${HomeStyle.workTab} `}>
          <WorkImg4 />
          <Link
            to='/'
            className={`float-shadow purple-btn ${HomeStyle.workLink}`}
          >
            Las Uvas Web Project
          </Link>
        </div>
      </Col>
    </Row>
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

export default WorkSection;
