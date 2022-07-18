import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className="posts-wrapper">
      <form className="post-form" action="url" method="get">
        <h3 className="post-title">My posts</h3>
        <textarea className="post-field" placeholder="your news..."></textarea>
        <button className="send">Send</button>
      </form>
      <Post message="Привет, как тебя зовут?" adress="https://www.1zoom.ru/big2/946/289597-frederika.jpg" count="20" />
      <Post message="Меня зовут Юрчик!!!" adress="https://www.film.ru/sites/default/files/styles/thumb_600x400/public/articles/0908/avt.jpg" count="100" />
    </div>
  );
};

export default MyPosts;