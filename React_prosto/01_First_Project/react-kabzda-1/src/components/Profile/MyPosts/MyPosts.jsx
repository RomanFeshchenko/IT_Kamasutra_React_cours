import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", likesCount: 0 },
    { id: 2, message: "How is your IT?", likesCount: 12 },
    { id: 3, message: "It`s my first post", likesCount: 23 },
  ];

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post
          massage={postData[0].message}
          LikesCount={postData[0].likesCount}
        />
        <Post
          massage={postData[1].message}
          LikesCount={postData[1].likesCount}
        />
        <Post
          massage={postData[2].message}
          LikesCount={postData[2].likesCount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
