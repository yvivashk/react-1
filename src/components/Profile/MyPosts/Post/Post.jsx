import './Post.css';

const Post = () => {
  return (
    <div class="post-wrapper">
      <img
        class="avatar-image"
        src="https://www.1zoom.ru/big2/946/289597-frederika.jpg"
        width="50px"
        height="50px"
        alt="изображение синелицей девушки"
      />
      <p>Текст поста</p>
    </div>
  );
}

export default Post;