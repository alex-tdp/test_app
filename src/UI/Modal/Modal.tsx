import React, { ChangeEvent, useCallback } from 'react';
import style from './Modal.module.css';

type ModalPropsType = {
	name: string,
	email: string,
	position: string,
	setName: (text: string) => void,
	setEmail: (text: string) => void,
	setPosition: (text: string) => void
	onAddUserBtnClick: () => void,
	setAddUserMode: (bool: boolean) => void
}

const Modal = React.memo((props: ModalPropsType) => {

	const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		props.setName(event.currentTarget.value);
	}, [props]);

	const onEmailChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		props.setEmail(event.currentTarget.value);
	}, [props]);

	const onPositionChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		props.setPosition(event.currentTarget.value);
	}, [props]);

	const onAddUserBtnClick = () => {
		props.onAddUserBtnClick();
		props.setAddUserMode(false);
	};

	return (
		<div className={style.wrapper}>
			<h3>Add user information</h3>
			<div className={style.inputWrap}>
				<input type="text" value={props.name} onChange={onNameChange} placeholder={'Name'} />
				<input type="email" value={props.email} onChange={onEmailChange} placeholder={'Email'} />
				<input type="text" value={props.position} onChange={onPositionChange} placeholder={'Position'} />
			</div>
			<div>
				<button className={style.btn} onClick={onAddUserBtnClick}>Add user</button>
			</div>
		</div>
	);
});

export default Modal;