import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <section className={s['dialogs-wrapper']}>
      <h3 className={s['dialogs-title']}>{props.title}</h3>
      <div className={s['users-messages-wrapper']}>
        <section className={s['users-wrapper']}>
          <ul className={s['users-list']}>
            <li>Андрей</li>
            <li>Саша</li>
            <li>Дмитрий</li>
            <li>Юрий</li>
            <li>Валерий</li>
            <li>Николай</li>
          </ul>
        </section>
        <section className={s['messages-wrapper']}>
          <ul className={s['messages-list']}>
            <li>Hi</li>
            <li>How are you?!</li>
            <li>Yo</li>
            <li>I'm fine!</li>
            <li>Have a nice weekend!!!</li>
            <li>WTF</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dialogs;