import React from 'react';
import ReactDOM from 'react-dom';

import { data } from './data';
import AutoResponsive from 'autoresponsive-react';
import './style.scss';


class WaterFall extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayList: data,
            itemMargin: 10,
            horizontalDirection: 'left',
            verticalDirection: 'top',
            containerHeight: null,
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                containerWidth: ReactDOM.findDOMNode(this.refs.container).clientWidth
            });
        }, false);
    }

    getAutoResponsiveProps() {
        return {
            horizontalDirection: this.state.horizontalDirection,
            verticalDirection: this.state.verticalDirection,
            itemMargin: this.state.itemMargin,
            containerWidth: this.state.containerWidth || this.props.containerWidth,
            itemClassName: 'item',
            containerHeight: this.state.containerHeight,
            transitionDuration: '.8',
            transitionTimingFunction: 'easeIn'
        };
    }

    renderItems() {
        return this.state.arrayList.map(function (item, index) {
            return (
                <div className="item" key={index} style={item.style}>
                    {item.title}
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <AutoResponsive ref="container" {...this.getAutoResponsiveProps()}>
                    {this.renderItems()}
                </AutoResponsive>
            </div>
        );
    }
}

export default WaterFall;
