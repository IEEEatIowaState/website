import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='content has-text-centered'>
        <h6>External Links</h6>
        <div className='columns'>
          <div className='column'>
            <a href='https://www.iastate.edu'>Iowa State University</a> <br />
          </div>
          <div className='column'>
            <a href='https://www.ieee.org'>IEEE</a>
          </div>
        </div>
        <p>
          © IEEE {moment().format('YYYY')}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
