import React from 'react';
import s from './../User_inform/User_info.module.scss'
const User_info = ()=>{
    return (
        <div className={s.user_info}>
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
    );
}

export default User_info;