import React from 'react';
import s from './Post.module.scss';

const Post = () =>{
    return(
        <div className={s.item}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png" 
         alt=""/>
          <h3>post 1</h3> 
        </div>
    );
}
export default Post;