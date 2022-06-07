import React, { Component } from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// Компонента Хедер
const Header = () => {
  return (
    <ul class="list header">
      <li>
        <a class="link" href="#">
          html
        </a>
      </li>
      <li>
        <a class="link" href="#">
          css
        </a>
      </li>
      <li>
        <a class="link" href="#">
          js
        </a>
      </li>
      <li>
        <a class="link" href="#">
          React
        </a>
      </li>
    </ul>
  );
};

// Компонента Майн
const Main = () => {
  return <section class="main">Основное содержимое</section>;
};

// Компонента футер
const Footer = () => {
  return (
    <ul class="list footer">
      <li>
        <a class="link" href="">
          О нас
        </a>
      </li>
      <li>
        <a class="link" href="">
          Контакты
        </a>
      </li>
      <li>
        <a class="link" href="">
          Напишите нам
        </a>
      </li>
      <li>
        <a class="link" href="">
          Лого
        </a>
      </li>
    </ul>
  );
};

export default App;
