import React from 'react';
import './Settings.css';

const Settings = (props) => {
  return (
    <section className="settings-wrapper">
      <h3 className="settings-title">{props.title}</h3>
    </section>
  );
};

export default Settings;