import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import FormMessage from "./FormMessage/FormMessage";

const MyPosts = () => {
  return (
    <div className={s.post}>
      <FormMessage/>
      <div className={s.posts}>
        <Post mess="Hello world" lk="15" />
        <Post mess="Hello world" lk="26" />
      </div>
    </div>
  );
};
export default MyPosts;
