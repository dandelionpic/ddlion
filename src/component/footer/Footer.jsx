import React from 'react';
import { Row, Col } from 'antd';
import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="dark">
        <div className="footer-wrap">
          <Row>
            <Col lg={8} sm={24} xs={24}>
              <div className="footer-center">
                <h2>About Us</h2>
                <div>
                  <a style={{ cursor: 'default' }}>Dandelion Pictures Inc</a>
                </div>
                <div>
                  <p> Dandelion Pictures IncDandelion Pictures is a group-based entertainment media company that integrates performing arts training, stage production, film and television drama planning and production, website design and production, performance planning, marketing planning and promotion as one of the industrial chain, cross-regional and cross-border. The company's headquarters is located in Toronto, Canada. Subsidiaries and strategic cooperation companies are located in Shanghai, Hangzhou, and Qingdao, China.</p>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="footer-center">
                <h2>Links</h2>
                <div>
                  <a target="_blank" href="#">ABOUT US</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="#">SERVICES</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="#">PROJECTS</a>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="#">CONTACT US</a>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  Contact Us
              </h2>
                <div>
                  <a target="_blank" href="#">Address</a>
                  <span> - </span>
                  <span>39 Helmesley Cres, Unionville, Ontario, Canada</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="tel:647-729-7026">Phone</a>
                  <span> - </span>
                  <span>+1 647-729-7026</span>
                </div>
                <div>
                  <a target="_blank" rel="noopener" href="mailto:jeffreyz.chang@gmail.com">Email</a>
                  <span> - </span>
                  <span>jeffreyz.chang@gmail.com</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Row className="bottom-bar">
          <Col lg={24} sm={24}>
            <span>Copyright © 2019 Dandelion Pictures Inc. All Rights Reserved.</span>
          </Col>
        </Row>
      </footer>
    );
  }
}


export default Footer;
