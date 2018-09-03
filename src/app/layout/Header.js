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
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fa fa-calendar-alt"></i>
              </span>
              Calendar
            </NavLink>
          </div>
          <div className="navbar-end">
            <a className='button navbarButton is-link'>Join the Club</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
