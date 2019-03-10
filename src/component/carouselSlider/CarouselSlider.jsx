import React from 'react';
import { Carousel } from 'antd';
import { data } from './data';

import './style.scss';

class CarouselSlider extends React.Component {

    renderItem = () => {
        return data.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item.url} alt={item.url} />
                    <h2 className="slider-title">
                        <span className="inner-circle">
                            <span></span><br />
                            <span>ddLion</span>
                        </span>
                    </h2>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Carousel autoplay="true" effect="fade">
                    {this.renderItem()}
                </Carousel>
            </div>
        );
    }
}

export default CarouselSlider;
