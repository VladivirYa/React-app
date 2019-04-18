import React from "react";
import s from "../MyPosts/MyPosts.module.scss";

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
      <div className={s.postItem}>
        <div className={s.item}>post 1
          <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
        </div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
};
export default MyPosts;
