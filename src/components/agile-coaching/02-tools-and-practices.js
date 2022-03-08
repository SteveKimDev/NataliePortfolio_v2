import * as React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Row, Col } from 'react-bootstrap';
import TabOne from './03-tab1';
import TabTwo from './04-tab2';
import TabThree from './05-tab3';
import TabFour from './06-tab4';
import TabFive from './07-tab5';
import TabSix from './08-tab6';

import * as CoachingStyle from './coaching.module.css';

const ToolsAndPractices = () => (
  <div className={`section ${CoachingStyle.toolsSection}`}>
    <AnimationOnScroll
      animateIn='animate__fadeIn'
      animateOut='animate__fadeOut'
      offset={100}
    >
      <h4 className={`section-subtitle`}>Tools &amp; Practices</h4>
      <p>
        The systems and processes I use better enable agile teams to succeed at
        delivering high-value, high-quality products for their stakeholders.
        Some of these systems &amp; processes include:
      </p>
    </AnimationOnScroll>
    <Row>
      {/* tab 1 */}
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabOne />
      </Col>

      {/* tab 2 */}
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabTwo />
      </Col>

      {/* tab 3 */}
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabThree />
      </Col>

      {/* tab 4 */}
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabFour />
      </Col>

      {/* tab 5 */}
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabFive />
      </Col>

      {/* tab 6 */}
      <Col xl={6} className={`${CoachingStyle.tab} ${CoachingStyle.tabLast}`}>
        <TabSix />
      </Col>
    </Row>
  </div>
);

export default ToolsAndPractices;
