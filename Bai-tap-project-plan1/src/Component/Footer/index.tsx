import React from 'react';
import { Layout, Row, Col } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="app-footer">
      <Row>
        <Col xs={24}>
          <div className="footer-bottom">
          © MovieVennie All Right Reserved
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
