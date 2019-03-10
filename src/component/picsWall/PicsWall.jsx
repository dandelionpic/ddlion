import React from 'react';
import { Row, Col } from 'antd';
import { data } from './data';

import './style.scss';


class PicsWall extends React.Component {

    renderItems() {
        return data.map(function (item, index) {
            return (
                <div className="item" key={index} style={item.style}>
                    <img src={item.url} alt={item.url} />
                </div>
            );
        });
    }

    render() {
        let index = 0;
        return (
            <div className="full-width">
                <Row>
                    <Col sm={24} md={12} lg={12} xl={12} className="img-container">
                        <div className="img" style={{ ...data[index++].style }}>
                            <div className="desc text-center">
                                <p className="tag"><span>Nature</span></p>
                                <h2 className="head-article"><a href="#">Gym Fitness</a></h2>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} md={12} lg={12} xl={12} className="img-container">
                        <Row>
                            <Col sm={24} md={12} lg={12} xl={12} className="img-container">
                                <div className="img" style={{ ...data[index++].style }}>
                                    <div className="desc text-center">
                                        <p className="tag"><span>Nature</span></p>
                                        <h2 className="head-article"><a>Gym Fitness</a></h2>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={12} lg={12} xl={12} className="img-container">
                                <div className="img" style={{ ...data[index++].style }}>
                                    <div className="desc text-center">
                                        <p className="tag"><span>Nature</span></p>
                                        <h2 className="head-article"><a>Gym Fitness</a></h2>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={24} md={24} lg={24} xl={24} className="img-container">
                                <div className="img" style={{ ...data[index++].style }}>
                                    <div className="desc text-center">
                                        <p className="tag"><span>Nature</span></p>
                                        <h2 className="head-article"><a>Gym Fitness</a></h2>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8} className="img-container">
                        <div className="img" style={{ ...data[index++].style }}>
                            <div className="desc text-center">
                                <p className="tag"><span>Nature</span></p>
                                <h2 className="head-article"><a>Gym Fitness</a></h2>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8} className="img-container">
                        <div className="img" style={{ ...data[index++].style }}>
                            <div className="desc text-center">
                                <p className="tag"><span>Nature</span></p>
                                <h2 className="head-article"><a>Gym Fitness</a></h2>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8} className="img-container">
                        <div className="img" style={{ ...data[index++].style }}>
                            <div className="desc text-center">
                                <p className="tag"><span>Nature</span></p>
                                <h2 className="head-article"><a>Gym Fitness</a></h2>
                                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PicsWall;
