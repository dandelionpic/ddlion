import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import CarouselSlider from '../../component/carouselSlider/CarouselSlider';
import PicsWall from '../../component/picsWall/PicsWall';
import Footer from '../../component/footer/Footer';

import About from "./About";
import './style.scss'; 

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CarouselSlider />
        <About />
        <PicsWall />
        <Footer />
      </div>
    );
  }
}

export default Home;
