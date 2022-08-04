import React from 'react';
import s from './Musuc.module.css';

const Music = (props) => {
  return (
    <section className={s['music-wrapper']}>
      <h3 className={s['music-title']}>{props.title}</h3>
    </section>
  );
};

export default Music;