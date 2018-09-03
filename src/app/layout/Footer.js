import React from 'react';
import moment from 'moment';

const Footer = () => (
  <footer className='footer'>
    <div className='container'>
      <div className='content has-text-centered'>
        <div className='columns'>
          <div className='column'>
            <h6>External Links</h6>
            <a href='https://www.iastate.edu'>Iowa State University</a> <br />
            <a href='https://www.ieee.org'>IEEE</a>
          </div>
          <div className='column'>
            Second
          </div>
        </div>
        <p>
          Built with <a href='https://github.com/facebook/react'><strong>React</strong></a> and <a href='https://bulma.io'><strong>Bulma</strong></a> by <a href="https://github.com/mrtalley">Maxwell Talley</a>
          <br />
          © IEEE {moment().format('YYYY')}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
