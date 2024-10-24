import { useState } from "react";
import { postData } from "../assets/data/data";

function Posts() {
  const [posts, setPosts] = useState(postData);

  const handleLike = (index) => {
    const newPosts = posts.map((post, i) => {
      if (i === index) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(newPosts);
  };

  const handleDislike = (index) => {
    const newPosts = posts.map((post, i) => {
      if (i === index && post.likes > 0) {
        return { ...post, likes: post.likes - 1 };
      }
      return post;
    });
    setPosts(newPosts);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        
        {posts.map((post, id) => (
          <div className="post-item" key={id}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button className="like-button" onClick={() => handleLike(id)}>
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDislike(id)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
