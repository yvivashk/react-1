import React from 'react';
import '../Sidebar/Sidebar.css';

const Sidebar = (props) => {
  return (
    <section className="sidebar-menu">
      <ul className="list">
        <li>
          <a className="link" href="#">
            Профиль
          </a>
        </li>
        <li>
          <a className="link" href="#">
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

