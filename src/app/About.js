import React from 'react';

import '../assets/styles/about.css';

import team from '../assets/json/executiveTeam.js';
import boardMembers from '../assets/images/board-members.jpg';

const list = [];
var listRow = [];
var email;

const createMemberCards = () => {
  team.forEach((member, i) => {
    email = 'mailto:' + member.email;
    console.log(email);
    listRow.push(
      <div className='column is-one-third' key={member.position}>
        <div className='card'>
          <div className='card-image'>
            <figure className='image is-4by3'>
              <img src={member.image} alt={member.position} />
            </figure>
          </div>
          <div className='card-content'>
            <div className='media'>
              <div className='media-content'>
                <p className='title is-5'>{member.name}</p>
                <p className='subtitle is-6'>
                  <a href={email}>
                    {member.position}
                  </a>
                </p>
              </div>
            </div>
            <div className='content'>
              <button className='button modal-button is-info' onClick={() => {
                document.getElementById(member.position)
                  .classList.add('is-active');
              }}>
                Find Out More
              </button>
              <div className='modal' id={member.position}>
                <div className='modal-background' onClick={() => {
                  document.getElementById(member.position)
                    .classList.remove('is-active');
                }}></div>
                <div className='modal-content'>
                  <div className='card'>
                    <header className='card-header'>
                      <div className='card-header-title fix-card-header-title'>
                        {member.name}
                      </div>
                      <a className='card-header-icon' aria-label='close'>
                        <span className='icon' onClick={() => {
                          document.getElementById(member.position)
                            .classList.remove('is-active');
                        }}>
                          <i className='fas fa-times-circle is-large' aria-hidden='true'></i>
                        </span>
                      </a>
                    </header>
                    <div className='card-content'>
                      <div className='content'>
                        {member.bio}
                      </div>
                    </div>
                    <footer className='card-footer'>
                      <a href={email} className='card-footer-item'>
                        Email
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    if((i + 1) % 3 === 0 || (i + 1) === team.length) {
      list.push(
        <div className='row columns' key={i}>
          {listRow}
        </div>
      )
      listRow = [];
    }
  })

  return list;
};

const showModal = (position) => {
  let modal = document.getElementById(position);
  modal.classList.add('is-active');
  console.log(modal.classList);
}

createMemberCards();

const About = () => (
  <div style={{
    backgroundColor: '#FCFCFC'
  }}>
    <div className='section'>
      <div className='container is-desktop light-background'>
        <h1 className='title has-text-centered'>
          About Us
        </h1>
        <div className='has-text-centered'>
        The Institute of Electrical and Electronics Engineers is the world’s largest professional technical society devoted to the advancement of technology. The ISU Chapter of IEEE is devoted to serving the students of the Electrical and Computer Engineering department.
        </div>
      </div>
    </div>
    <div className='section dark-background'>
      <div className='container is-desktop'>
        <div className='columns'>
          <div className='column'>
            <img className='image is-4by3 column is-paddingless' src={boardMembers} alt='Board Members'/>
          </div>
          <div className='column is-vertically-centered'>
            <div>
              <h4 className='is-size-4 has-text-right'>Why Join?</h4>
              <div className='has-text-right'>
                Our goals are met by hosting company information sessions, co-sponsoring curriculum forums, increasing interest in community involvement, and developing The Relay. To join ISU chapter of IEEE all you have to do is show up to the one of the chapter meetings. Meetings are held at 7 PM on Wednesdays in Coover 3043.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='section'>
      <h3 className='is-size-3 has-text-centered' style={{
        paddingBottom: '20px'
      }}>
        Executive Team
      </h3>
      <div className='container is-desktop light-background'>
        {list}
    </div>
    </div>
  </div>
);

export default About;
