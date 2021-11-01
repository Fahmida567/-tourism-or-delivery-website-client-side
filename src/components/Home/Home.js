import React from 'react';


import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Packages from '../Packages/Packages';
import WhyTravel from '../WhyTravel/WhyTravel';

import './Home.css'


const Home = () => {
  return (
    <div id="home" className=''>
      <div >
        <img className='image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/A_backpacking_travel_to_europe_R002-005.jpg/1280px-A_backpacking_travel_to_europe_R002-005.jpg" alt="" />
      </div>


      <div>
        <Packages></Packages>
        <WhyTravel></WhyTravel>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>

      </div>



    </div>
  );
};

export default Home;