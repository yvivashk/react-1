import React from 'react';
import s from './News.module.css';

const News = (props) => {
  return (
    <section className={s['news-wrapper']}>
      <h3 className={s['news-title']}>{props.title}</h3>
    </section>
  );
};

export default News;