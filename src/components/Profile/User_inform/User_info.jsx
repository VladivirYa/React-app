import React from 'react';
import s from './../User_inform/User_info.module.scss'
import Preloader from "../../common/Preloader/Preloader";
import UserStatus from "./UserStatus";

const User_info = (props) => {
	if(!props.profile){
		return <Preloader/>
	}
	return (
		<div>
			{/*<div>*/}
			{/*	<div className={s.img}/>*/}
			{/*</div>*/}
			<div className={s.user_info}>
				<div>
					<img src={props.profile.photos.large}/>
					<UserStatus status={"Hello my friends"}/>
				</div>

				<div className={s.description}>
					<div>Статус : {props.profile.aboutMe}</div>
					<ul>
						<li><span>Facebook : </span>{props.profile.contacts.facebook}</li>
							<li><span>github : </span>{props.profile.contacts.github}</li>
						<li><span>Полное имя : </span>{props.profile.fullName}</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default User_info;