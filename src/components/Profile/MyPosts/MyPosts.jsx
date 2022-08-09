import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Привет, как тебя зовут?', likesCount: 20, adress: 'https://www.1zoom.ru/big2/946/289597-frederika.jpg',},
    {id: 2, message: 'Меня зовут Юрчик!!!', likesCount: 100, adress: 'https://www.film.ru/sites/default/files/styles/thumb_600x400/public/articles/0908/avt.jpg'},
  ];

  let postsElements = posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} adress={p.adress}/>);

  return (
    <div className={s['posts-wrapper']}>
      <form className={s['post-form']} action="" method="get">
        <h3 className={s['post-title']}>My posts</h3>
        <textarea className={s['post-field']} placeholder="your news..."></textarea>
        <button className={s.send}>Send</button>
      </form>
      { postsElements }
    </div>
  );
};

export default MyPosts;