import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactImg from './02-contact-img';
import ContactContent from './03-contact-content';

import * as ContactStyle from './contact.module.css';

const FunctionName = () => (
  <div className={`section ${ContactStyle.contactSection}`}>
    <div className={`float-shadow white-btn ${ContactStyle.floatBox}`}>
      <Row>
        <Col>
          <ContactImg />
        </Col>
        <Col>
          <ContactContent />
        </Col>
      </Row>
    </div>
  </div>
);

export default FunctionName;
