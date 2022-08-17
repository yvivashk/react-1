import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = (props) => {

  let postsElements = props.posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} adress={p.adress}/>);

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