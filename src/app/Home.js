import React from 'react';

import hero from '../assets/images/splash-image.jpg';

const Home = () => (
  <div>
    <div className='hero-head'>
      <img src={hero} />
      <p>This is the home page</p>
    </div>
  </div>
);

export default Home;
