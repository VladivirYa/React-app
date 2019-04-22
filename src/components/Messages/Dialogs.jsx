import React from 'react';
import s from './Dialogs.module.scss'

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog +' '+ s.active}>
					Vladimir
				</div>
				<div className={s.dialog}>
					Ivan
				</div>
				<div className={s.dialog}>
					Grigoriy
				</div>
				<div className={s.dialog}>
					Viktor
				</div>
				<div className={s.dialog}>
					Roman
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>Hi</div>
				<div className={s.message}>How is your it</div>
				<div className={s.message}></div>
			</div>
		</div>
	);
};

export default Dialogs;