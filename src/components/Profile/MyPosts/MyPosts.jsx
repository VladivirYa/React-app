import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.post}>
      <h3>My posts</h3>
      <div className={s.post__wrap}>
        <div className={s.fild}>
          <textarea />
        </div>
        <div className={s.button}>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post mess="Hello world" lk="15" />
        <Post mess="Hello world" lk="26" />
      </div>
    </div>
  );
};
export default MyPosts;
