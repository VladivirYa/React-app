import React from 'react';
import styles from './users.module.scss';

let Users = (props) => {
debugger;
	if(props.users.length === 0){
		props.setUsers([
			{
				id: 1,
				followed: false,
				fullName: 'Vladimir',
				status: 'I am a boss',
				location: {city: 'Kiev', country: 'Ukraine'},
				photoUrl: 'https://yt3.ggpht.com/a-/AAuE7mB-sN6TajR14CcScVbgjsa421akzDrjgknd3g=s900-mo-c-c0xffffffff-rj-k-no'
			},
			{
				id: 2,
				followed: true,
				fullName: 'Dmitry',
				status: 'I am boy',
				location: {city: 'Minsk', country: 'Belarus'},
				photoUrl: 'https://yt3.ggpht.com/a-/AAuE7mB-sN6TajR14CcScVbgjsa421akzDrjgknd3g=s900-mo-c-c0xffffffff-rj-k-no'
			},
			{
				id: 3,
				followed: false,
				fullName: 'Joze',
				status: 'I like music',
				location: {city: 'Parish', country: 'France'},
				photoUrl: 'https://yt3.ggpht.com/a-/AAuE7mB-sN6TajR14CcScVbgjsa421akzDrjgknd3g=s900-mo-c-c0xffffffff-rj-k-no'
			}
		]);
	}


	return (
		<div className={styles.container}>
			{
				props.users.map( (u) => <div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} alt="logo" className={styles.userPhoto}/>
						</div>
						<div className={styles.button}>
							{u.followed
								? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
								: <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
};

export default Users;