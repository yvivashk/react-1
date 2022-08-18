import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <section className={s.main}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </section>
  );
};

export default Profile;
