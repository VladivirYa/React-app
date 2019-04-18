import React from "react";
import s from "./Profile.module.scss";
import User_info from "./User_inform/User_info";


const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <div className={s.img} />
      </div>
      <User_info/>
      <div className={s.post}>
        My posts
        <div>New post</div>
        <div className={s.post__item}>
          <div className={s.item}>post 1</div>
          <div className={s.item}>post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
