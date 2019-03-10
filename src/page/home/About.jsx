import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

class About extends React.Component {
    render() {
        return (
            <Layout style={{ background: '#fff' }} id="about-us">
                <Content className="layout-content">
                    <div className="container">
                        <div className="section-heading">
                            <h2>About Us</h2>
                            <div className="heading-line"></div>
                            <p>We’ve been building unique digital products, platforms, and experiences for the past 6 years.</p>
                        </div>

                        <Row>
                            <Col span={12} className="about-img">
                                <img src='https://bootstrapmade.com/demo/themes/Alstar/img/about-img.jpg'></img>
                            </Col>
                            <Col span={12} className="content">
                                <h2>Dandelion Pictures Inc. </h2>
                                <h3>We has a high-level professional team, rich resources, adhering to the creative, professional and effective service tenet, based on the two-way market in China and Canada, and is committed to building a high-quality bridge-type entertainment media company.</h3>
                                <p>Dandelion Pictures is a group-based entertainment media company that integrates performing arts training, stage production, film and television drama planning and production, website design and production, performance planning, marketing planning and promotion as one of the industrial chain, cross-regional and cross-border. The company's headquarters is located in Toronto, Canada. Subsidiaries and strategic cooperation companies are located in Shanghai, Hangzhou, and Qingdao, China.</p>
                            </Col>
                        </Row>
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default About;
