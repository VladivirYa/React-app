import React from 'react';
import s from "./Header.module.scss";

const Header = () => {
    return (
        <header className={s.header}>
        <img className={`${s.img} ${s.active}`} src='https://yt3.ggpht.com/a-/AAuE7mB-sN6TajR14CcScVbgjsa421akzDrjgknd3g=s900-mo-c-c0xffffffff-rj-k-no' />
    </header>
    );
}

export default Header;