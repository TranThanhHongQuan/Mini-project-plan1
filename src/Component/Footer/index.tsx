import React from 'react';
import { Layout, Row, Col } from 'antd';
import './Footer.css';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="app-footer">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <div className='footer-logo'>
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
          </div>
          <h4>JOIN THE COMMUNITY</h4>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>THE BASICS</h4>
          <ul>
            <li>Giới thiệu về TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>GET INVOLVED</h4>
          <ul>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>COMMUNITY</h4>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <h4>LEGAL</h4>
          <ul>
            <li>Terms of Use</li>
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
            <li>DMCA Policy</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <div className="footer-bottom">
            Hồng Quân(hihi)
          </div>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
