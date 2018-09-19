import React from 'react';

import '../assets/styles/about.css';

import team from '../assets/json/executiveTeam.js';
import boardMembers from '../assets/images/board-members.jpg';

const list = [];
var listRow = [];

const createMemberCards = () => {
  team.forEach((member, i) => {
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
                <p className='title is-4'>{member.name}</p>
                <p className='subtitle is-6'>
                  <a href='mailto:{member.email}'>
                    {member.position}
                  </a>
                </p>
              </div>
            </div>
            <div className='content'>
              <button className='button modal-button is-info' onClick={() => {
                let modal = document.getElementById(member.position);
                modal.classList.add('is-active');
              }}>
                Find Out More
              </button>
              <div className='modal' id={member.position}>
                <div className='modal-background'></div>
                <div className='modal-content'>
                  <article className='message'>
                    <div className='message-header is-link'>
                      {member.name}
                      <button className='delete' aria-label='delete' onClick={() => {
                        let modal = document.getElementById(member.position);
                        modal.classList.remove('is-active');
                      }}></button>
                    </div>
                    <div className='message-body'>
                      {member.bio}
                    </div>
                  </article>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus  sodales purus,vitae dictum orci. Sed in pretium neque. Fusce malesuada augue in feugiat faucibus. Nullam dolor metus, elementum in dignissim  a5non, maximus vel leo.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam cursus  sodales purus,vitae dictum orci. Sed in pretium neque. Fusce malesuada augue in feugiat faucibus. Nullam dolor metus, elementum in dignissim  non, maximus vel leo. Nunc imperdiet dapibus lectus, a vehicula ante  feugiat in. Pellentesque egestas est sit amet volutpat elementum.
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
