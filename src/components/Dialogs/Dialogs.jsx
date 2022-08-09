import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

// подкомпонента Диалог
const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
    <li>
      <NavLink className={s.link} to={path}>{props.name}</NavLink>
    </li>
  )
}

// подкомпонента Сообщения
const Message = (props) => {
  return <li>{props.message}</li>
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Андрей'},
    {id: 2, name: 'Саша'},
    {id: 3, name: 'Дмитрий'},
    {id: 4, name: 'Юрий'},
    {id: 5, name: 'Валерий'},
    {id: 6, name: 'Николай'},
  ];

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?!'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'I\'m fine!'},
    {id: 5, message: 'Have a nice weekend!!!'},
    {id: 6, message: 'WTF'},
  ];

  return (
    <section className={s['dialogs-wrapper']}>
      <h3 className={s['dialogs-title']}>{props.title}</h3>
      <div className={s['users-messages-wrapper']}>
        <section className={s['users-wrapper']}>
          <ul className={s['users-list']}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
          </ul>
        </section>
        <section className={s['messages-wrapper']}>
          <ul className={s['messages-list']}>
            <Message message={messagesData[0].message} id={messagesData[0].id} />
            <Message message={messagesData[1].message} id={messagesData[1].id} />
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dialogs;