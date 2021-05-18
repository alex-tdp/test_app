import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers, UserType } from '../../Store/mainReducer';
import { AppRootStateType } from '../../Store/store';
import Modal from '../Modal/Modal';
import Table from '../Table/Table';
import style from './Main.module.css'

const Main = React.memo(() => {

	const dispatch = useDispatch();
	const count = useSelector<AppRootStateType, number>(state => state.main.count);
	const users = useSelector<AppRootStateType, Array<UserType>>(state => state.main.users);

	const [isNewUserAdded, setIsNewUserAdded] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [position, setPosition] = useState('');
	const [page, setPage] = useState(1);
	const [addUserMode, setAddUserMode] = useState(false);

	const onAddUserBtnClick = useCallback(() => {
		if(!name || !email || !position) return
		dispatch(addUser(name, email, position));
		setName('');
		setEmail('');
		setPosition('');
		setIsNewUserAdded(true);
		setAddUserMode(false);
	}, [dispatch, email, name, position]);

	const onNextClick = useCallback(() => {
		if (page > Math.ceil(count / 5)) return
		setPage(page + 1)
	}, [count, page]);

	const onPreviousClick = useCallback(() => {
		if (page === 1) return
		setPage(page - 1)
	}, [page])

	useEffect(() => {
		dispatch(getUsers(page));
		setIsNewUserAdded(false)
	}, [page, isNewUserAdded]);

	console.log(page);
	return (
		<div style={{marginTop: '50px', position: 'relative'}}>
			<Table users={users} setAddUserMode={setAddUserMode}/>
			<div className={style.pagination}>
				{page >= 2 && <span className={style.arrow} onClick={onPreviousClick}>{'< '}</span>}
				{ page }
				{page < Math.ceil(count / 5) && <span className={style.arrow} onClick={onNextClick}>{' >'}</span>}
			</div>
			{addUserMode && <Modal email={email} 
				name={name} 
				position={position} 
				setName={setName} 
				setEmail={setEmail} 
				setPosition={setPosition}
				onAddUserBtnClick={onAddUserBtnClick}
				setAddUserMode={setAddUserMode}	
			/>}
		</div>
	);
});

export default Main;