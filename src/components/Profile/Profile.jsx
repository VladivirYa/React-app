import React from "react";
import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <div className={s.img} />
      </div>
      <div className={s.wrap}>
        <div>
          <img
            src="https://marketplace.canva.com/MAA_Ae2e8_I/1/0/thumbnail_large/canva-handmade-logo-profile-picture-MAA_Ae2e8_I.jpg"
            alt=""
          />
        </div>
        <div className={s.description}>
          <h2>Tony K.</h2>
          <ul>
            <li><span>Data of Birth:</span> 2 january</li>
            <li><span>City:</span> Minsk</li>
            <li><span>Eduvation:</span> BSU'11</li>
            <li><span>Web Site:</span> //google.com.ua</li>
          </ul>
        </div>
      </div>
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
