import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postData = [
    {id: 1, message: 'Привет, как тебя зовут?', likesCount: 20,},
    {id: 2, message: 'Меня зовут Юрчик!!!', likesCount: 100,},
  ];

  return (
    <div className={s['posts-wrapper']}>
      <form className={s['post-form']} action="url" method="get">
        <h3 className={s['post-title']}>My posts</h3>
        <textarea className={s['post-field']} placeholder="your news..."></textarea>
        <button className={s.send}>Send</button>
      </form>
      <Post message={postData[0].message} adress="https://www.1zoom.ru/big2/946/289597-frederika.jpg" count={postData[0].likesCount
      } />
      <Post message={postData[1].message} adress="https://www.film.ru/sites/default/files/styles/thumb_600x400/public/articles/0908/avt.jpg" count={postData[1].likesCount} />
    </div>
  );
};

export default MyPosts;