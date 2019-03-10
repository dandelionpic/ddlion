import React from 'react';
import { data } from './data';

import './style.scss';

class Navbar extends React.Component {

    onMouseEnter = (e) => {
        const navbar = document.querySelector('#ddlion-navbar');
        navbar.classList.add('show');
    }

    onMouseLeave = () => {
        const navbar = document.querySelector('#ddlion-navbar');
        navbar.classList.remove('show');
    }

    renderItems = () => {
        return data.map((item, index) => {
            return (
                <li className="nav-item" key={index}>
                    <a href={item.url} className="nav-link">{item.text}</a>
                </li>
            )
        })
    }

    render() {
        return (
            <nav className="navbar navbar-light left show" id="ddlion-navbar" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            {this.renderItems()}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
