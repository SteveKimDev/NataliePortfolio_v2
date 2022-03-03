import * as React from 'react';
import { Link } from 'gatsby';
import { Parallax } from 'react-scroll-parallax';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import WorkContent from './02-work-content';
import WorkImg1 from './03-work-img-1';
import WorkImg2 from './04-work-img-2';
import WorkImg3 from './05-work-img-3';
import WorkImg4 from './06-work-img-4';
import FloaterDivs from './07-floater-divs';

import * as HomeStyle from '../home.module.css';

const WorkSection = () => (
  <div className={`section ${HomeStyle.workSection}`} id='work'>
    <Parallax speed={2}>
      <WorkContent />
    </Parallax>

    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
    >
      <Row className={HomeStyle.workRow}>
        {/* tab 1 */}
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

        {/* tab 2 */}
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

        {/* tab 3 */}
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

        {/* tab 4 */}
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
    </AnimationOnScroll>
    <FloaterDivs />
  </div>
);

export default WorkSection;
