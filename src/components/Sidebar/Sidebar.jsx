import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <section className="sidebar-menu">
      <ul className="list">
        <li>
          <a className="link" href="/profile">
            Профиль
          </a>
        </li>
        <li>
          <a className="link" href="/dialogs">
            Сообщения
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Новости
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Музыка
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Настройки
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

