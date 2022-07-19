import React from 'react';
import './Dialogs.css';

const Dialogs = (props) => {
  return (
    <section className="dialogs-wrapper">
      <h3 className="dialogs-title">{props.title}</h3>
    </section>
  );
};

export default Dialogs;