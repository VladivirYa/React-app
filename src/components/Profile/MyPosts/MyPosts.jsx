import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.post}>
      My posts
      <div className={s.post__fild}>
        <textarea name="" id="" cols="30" rows="5" />
      </div>
      <div className={s.post__button}>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post />
      </div>
    </div>
  );
};
export default MyPosts;
