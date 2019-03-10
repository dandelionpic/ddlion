import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import CarouselSlider from '../../component/carouselSlider/CarouselSlider';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <CarouselSlider />
      </div>
    );
  }
}

export default Home;
