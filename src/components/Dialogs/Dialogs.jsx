import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />);

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