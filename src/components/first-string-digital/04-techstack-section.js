import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import * as FSDStyle from './fsd.module.css';

const TechStackSection = () => (
  <div className={`section ${FSDStyle.techStackSection}`}>
    <h4 className={`section-subtitle mb-1rem`}>Tech Stack</h4>
    <Row>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
      <Col></Col>
    </Row>
  </div>
);

export default TechStackSection;
