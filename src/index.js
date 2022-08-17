import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let posts = [
  {id: 1, message: 'Привет, как тебя зовут?', likesCount: 20, adress: 'https://www.1zoom.ru/big2/946/289597-frederika.jpg',},
  {id: 2, message: 'Меня зовут Юрчик!!!', likesCount: 100, adress: 'https://www.film.ru/sites/default/files/styles/thumb_600x400/public/articles/0908/avt.jpg'},
];

let dialogs = [
  {id: 1, name: "Юрчик"},
  {id: 2, name: "Анна"},
  {id: 3, name: "Ксюнчик"},
  {id: 4, name: "Валера"},
  {id: 5, name: "Людмила"},
  {id: 6, name: "Лидия"},
  {id: 7, name: "Николай"},
];

let messages = [
  {id: 1, message: "Кукушечки"},
  {id: 2, message: "Старушатиной пахнет"},
  {id: 3, message: "Кэрлэбэле"},
  {id: 4, message: "Футбол, включите футбол"},
  {id: 5, message: "Работу, дайте работу!"},
  {id: 6, message: "Что-то я переживаю"},
  {id: 7, message: "Босоногое детство"},
];

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
