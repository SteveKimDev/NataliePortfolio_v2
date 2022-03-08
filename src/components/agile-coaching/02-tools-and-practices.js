import * as React from 'react';
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
    <h4 className={`section-subtitle`}>Tools &amp; Practices</h4>
    <p>
      The systems and processes I use better enable agile teams to succeed at
      delivering high-value, high-quality products for their stakeholders. Some
      of these systems &amp; processes include:
    </p>
    <Row>
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabOne />
      </Col>
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabTwo />
      </Col>
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabThree />
      </Col>
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabFour />
      </Col>
      <Col xl={6} className={`float-shadow white-btn ${CoachingStyle.tab}`}>
        <TabFive />
      </Col>
      <Col xl={6} className={`${CoachingStyle.tab} ${CoachingStyle.tabLast}`}>
        <TabSix />
      </Col>
    </Row>
  </div>
);

export default ToolsAndPractices;
