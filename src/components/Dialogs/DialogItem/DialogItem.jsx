import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

// подкомпонента Диалог
const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
    <li>
      <NavLink className={s.link} to={path}>{props.name}</NavLink>
    </li>
  )
}

export default DialogItem;