import { useState } from "react";
function Posts() {
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);

  // const handleLike = () => {
  //   setLikes(likes + 1);
  // };
  // const handleDislike = () => {
  //   setLikes(likes - 1);
  //   if (likes <= 0) {
  //     return setLikes(0);}
  // };
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setLikes((prevLikes) => Math.max(prevLikes - 1, 0));
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        <div class="post-item">
          <div class="post-header">
            <h2>Post Title #1</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">{likes}</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button class="like-button" onClick={handleLike}>
              Like
            </button>
            <button class="dislike-button" onClick={handleDislike}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
