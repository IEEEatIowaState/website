import React from 'react';

let width = window.innerWidth;
let calendar = {};

if(width > 768) {
  calendar = () => (
    <iframe src="https://calendar.google.com/calendar/embed?src=2jj1ptuu2kqthq4mikg0qvam40%40group.calendar.google.com&ctz=America%2FChicago"
      style={{
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0,
        width: '1200px',
        height: '900px'
      }}
      frameborder="0"
      scrolling="no"
    >
    </iframe>
  );
}

else {
  calendar = () => (
    <iframe src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=2jj1ptuu2kqthq4mikg0qvam40%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=America%2FChicago"
      style={{
        borderWidth: 0,
        width: '100%',
        height: '600px'
      }}
      frameborder="0"
      scrolling="no"
    >
    </iframe>
  );
}

export default calendar;
