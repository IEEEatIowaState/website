import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <div>
      <nav className='navbar'
        aria-label='main navigation'
        style={{
          borderBottom: 'solid 1px #dddddd'
        }}
      >
        <div className='navbar-brand'>
          <NavLink
            className='navbar-item'
            to='/'
          >
            <img
              src={logo}
              alt='Iowa State IEEE'
            />
          </NavLink>
          <button className='button navbar-burger' onClick={ this.toggleNav }>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu' }>
          <div className='navbar-start'>
            <NavLink
              className='navbar-item'
              to='/about'
              activeClassName='is-active'
            >
              <span className='icon has-text-primary' style={{ marginRight: 5 }} >
                <i className='fas fa-user'></i>
              </span>
              About
            </NavLink>
            <NavLink
              className="navbar-item"
              to='/calendar'
            >
              <span className="icon has-text-info" style={{ marginRight: 5 }}>
                <i className="fa fa-calendar-alt"></i>
              </span>
              Calendar
            </NavLink>
            <NavLink
              className='navbar-item'
              to='/projects'
            >
              <span className="icon has-text-warning" style={{ marginRight: 5 }}>
                <i className="fa fa-laptop"></i>
              </span>
              Projects
            </NavLink>
          </div>
          <div className="navbar-end">
            <a className='button navbarButton is-link' onClick={() => {
              document.getElementById('header-modal')
                .classList.add('is-active');
            }}>
              Join the Club
            </a>
          </div>
        </div>
      </nav>
      <div className='modal' id='header-modal'>
        <div className='modal-background' onClick={() => {
          document.getElementById('header-modal')
            .classList.remove('is-active');
        }}></div>
        <div className='modal-content'>
          <div className='card'>
            <header className='card-header'>
              <div className='card-header-title fix-card-header-title'>
                Join ISU@IEEE
              </div>
              <a className='card-header-icon' aria-label='close'>
                <span className='icon' onClick={() => {
                  document.getElementById('header-modal')
                    .classList.remove('is-active');
                }}>
                  <i className='fas fa-times-circle is-large' aria-hidden='true'></i>
                </span>
              </a>
            </header>
            <div className='card-content'>
              <div className='content'>
                Want to get involved?
                <ol>
                  <li>
                      Email the <a href='mailto:ieeepres@iastate.edu'>President</a> to join the IEEE Iowa State Student Branch. You'll be placed on the IEEE e-mail list and be notified of upcoming events.
                  </li>
                  <li>
                    Stop by at the next general meeting and get to know us! Check the calendar for meeting times and locations.
                  </li>
                  <li>
                    If you have any questions about IEEE@ISU, send an e-mail to our president at <a href='mailto:ieeepres@iastate.edu'>ieeepres@iastate.edu</a>.
                  </li>
                </ol>
              </div>
            </div>
            <footer className='card-footer'>
              <a href='{member.email}' className='card-footer-item'>
                Email
                      </a>
            </footer>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Header;
