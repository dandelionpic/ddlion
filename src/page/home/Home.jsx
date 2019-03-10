import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import CarouselSlider from '../../component/carouselSlider/CarouselSlider';
import WaterFall from '../../component/waterFall/WaterFall';
import About from "./About";
import './style.scss'; 

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CarouselSlider />
        <About />
        <WaterFall />
      </div>
    );
  }
}

export default Home;
