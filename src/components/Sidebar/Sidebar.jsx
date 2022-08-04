import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <section className={s['sidebar-menu']}>
      <ul className={s.list}>
        <li>
          <NavLink className={s.link} to="/profile">
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/dialogs">
            Сообщения
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/news">
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/music">
            Музыка
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/settings">
            Настройки
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

