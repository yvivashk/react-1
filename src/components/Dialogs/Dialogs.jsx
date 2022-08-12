import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: 'Андрей' },
    { id: 2, name: 'Саша' },
    { id: 3, name: 'Дмитрий' },
    { id: 4, name: 'Юрий' },
    { id: 5, name: 'Валерий' },
    { id: 6, name: 'Николай' },
  ];

  let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?!' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'I\'m fine!' },
    { id: 5, message: 'Have a nice weekend!!!' },
    { id: 6, message: 'WTF' },
  ];

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

  return (
    <section className={s['dialogs-wrapper']}>
      <h3 className={s['dialogs-title']}>{props.title}</h3>
      <div className={s['users-messages-wrapper']}>
        <section className={s['users-wrapper']}>
          <ul className={s['users-list']}>
            {dialogsElements}
          </ul>
        </section>
        <section className={s['messages-wrapper']}>
          <ul className={s['messages-list']}>
            {messagesElements}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dialogs;