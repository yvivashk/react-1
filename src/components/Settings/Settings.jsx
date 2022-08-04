import React from 'react';
import s from './Settings.module.css';

const Settings = (props) => {
  return (
    <section className={s['settings-wrapper']}>
      <h3 className={s['settings-title']}>{props.title}</h3>
    </section>
  );
};

export default Settings;