import React from 'react';
import './News.css';

const News = (props) => {
  return (
    <section className="news-wrapper">
      <h3 className="news-title">{props.title}</h3>
    </section>
  );
};

export default News;