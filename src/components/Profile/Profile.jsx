import React from 'react';
import './Profile.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <section className="main">
      <div className="images-wrapper">
        <img
          src="https://gid-home.ru/sites/default/files/fartuk_dlya_kuhni_mdf_610_h_2440_h_4_mm_ag102_0.jpg"
          width="100%"
          height="100%"
          alt="цветы на заборе"
        />
      </div>
      <div className="user-wrapper">
        <img
          className="avatar"
          src="https://oir.mobi/uploads/posts/2021-05/1621371219_20-oir_mobi-p-ochen-smeshnie-sobaki-zhivotnie-krasivo-fo-20.jpg"
          width="100px"
          height="100px"
          alt="аватарка пользователя"
        />
        <ul className="user-list">
          <li>Name:</li>
          <li>Date of Birth:</li>
          <li>City:</li>
          <li>Education:</li>
          <li>Web Site:</li>
        </ul>
      </div>
      <MyPosts />
    </section>
  );
};

export default Profile;
