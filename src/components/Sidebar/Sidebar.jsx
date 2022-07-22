import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <section className="sidebar-menu">
      <ul className="list">
        <li>
          <NavLink className="link" to="/profile">
            Профиль
          </NavLink>
        </li>
        <li>
          <a className="link" href="/dialogs">
            Сообщения
          </a>
        </li>
        <li>
          <a className="link" href="/news">
            Новости
          </a>
        </li>
        <li>
          <a className="link" href="/music">
            Музыка
          </a>
        </li>
        <li>
          <a className="link" href="/settings">
            Настройки
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

