import React, { Component } from "react";

const Sidebar = () => {
  return (
    <section className="sidebar-menu">
      <ul className="list">
        <li>
          <a className="link" href="#">
            Profile
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Messages
          </a>
        </li>
        <li>
          <a className="link" href="#">
            News
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Music
          </a>
        </li>
        <li>
          <a className="link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;

