import './Post.css';

const Post = (props) => {
  return (
    <div className="post-wrapper" id={props.id}>
      <img
        className="avatar-image"
        src={props.adress}
        width="50px"
        height="50px"
        alt="изображение синелицей девушки"
      />
      <p className="post-message">{props.message}</p>
      <p className="post-likes">Likes - {props.likesCount}</p>
    </div>
  );
}

export default Post;