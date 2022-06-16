import React, { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="content-wrapper">
      <header className="header">
        <img
          src="cloud-computing.png"
          width="100"
          height="100"
          alt="логотип"
        ></img>
      </header>
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
      <section className="main"></section>
    </div>
  );
};

export default App;
