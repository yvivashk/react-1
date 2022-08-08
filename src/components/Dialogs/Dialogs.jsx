import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <section className={s['dialogs-wrapper']}>
      <h3 className={s['dialogs-title']}>{props.title}</h3>
      <div className={s['users-messages-wrapper']}>
        <section className={s['users-wrapper']}>
          <ul className={s['users-list']}>
            <li>
              <NavLink to='/dialogs/1'>Андрей</NavLink>
            </li>
            <li>
              <NavLink to='/dialogs/2'>Саша</NavLink>
            </li>
            <li>
              <NavLink to='/dialogs/3'>Дмитрий</NavLink>
            </li>
            <li>
              <NavLink to='/dialogs/4'>Юрий</NavLink>
            </li>
            <li>
              <NavLink to='/dialogs/5'>Валерий</NavLink>
            </li>
            <li>
              <NavLink to='/dialogs/6'>Николай</NavLink>
            </li>
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