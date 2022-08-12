import React from 'react';
import s from './Message.module.css';

// подкомпонента Сообщения
const Message = (props) => {
  return <li>{props.message}</li>
}

export default Message;