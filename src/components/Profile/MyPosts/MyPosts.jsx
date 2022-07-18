import React, { Component } from "react";
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className="posts-wrapper">
      <form class="post-form" action="url" method="get">
        <h3 class="post-title">My posts</h3>
        <textarea class="post-field" placeholder="your news..."></textarea>
        <button class="send">Send</button>
      </form>
      <Post />
    </div>
  );
};

export default MyPosts;