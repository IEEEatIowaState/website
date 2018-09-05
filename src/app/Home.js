import React from 'react';

import hero from '../assets/images/splash-image.jpg';

const Home = () => (
  <div>
    <div className='hero'>
      <img src={hero} className='hero-body'/>
      <p>This is the home page</p>
    </div>
  </div>
);

export default Home;
