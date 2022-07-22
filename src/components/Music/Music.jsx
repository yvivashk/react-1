import React from 'react';
import './Music.css';

const Music = (props) => {
  return (
    <section className="music-wrapper">
      <h3 className="music-title">{props.title}</h3>
    </section>
  );
};

export default Music;