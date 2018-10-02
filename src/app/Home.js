import React from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/styles/home.css';

const Home = () => (
  <div>
    <section className='hero is-large hero-image'>
      <div className='opaque-background'></div>
      <div className='hero-body no-side-padding'>
        <div className='hero-body-color'>
          <div className='container has-text-centered is-size-1 has-text-white'>
            Want to network with companies and get free pizza in the process?
          </div>
          <div className='has-text-centered'>
              <a className='button is-link is-medium home-join-button' onClick={() => {
                document.getElementById('header-modal')
                  .classList.add('is-active');
              }}>
                Join the Club
              </a>
              <NavLink
                to='about'
              >
                <a className='button is-primary is-medium home-join-button'>
                  Learn More
                </a>
              </NavLink>
          </div>
        </div>
      </div>
    </section>
    <div className='section full-height light-background'>
      <div className='container is-desktop'>
        <div className='columns'>
          <div className='column is-one-third is-centered has-text-centered'>
            <div>
              <div className='is-size-5'>
                Company talks, game nights, and Jeff's Pizza!
              </div>
              <h4 className='is-size-4 is-uppercase has-text-weight-bold'>
                What
              </h4>
            </div>
          </div>
          <div className='column is-one-third has-text-centered is-centered'>
            <div>
              <div className='is-size-5'>
                Normally in Coover 3043, but check the calendar to be sure!
              </div>
              <h4 className='is-size-4 is-uppercase has-text-weight-bold'>
                Where
              </h4>
            </div>
          </div>
          <div className='column is-one-third has-text-centered is-centered'>
            <div>
              <div className='is-size-5'>Wednesday Nights at 7pm</div>
              <h4 className='is-size-4 is-uppercase has-text-weight-bold'>
                When
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
