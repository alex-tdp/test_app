import React from 'react';
import { UserType } from '../../Store/mainReducer';
import style from './Table.module.css';

type TablePropsType = {
	users: Array<UserType>,
	setAddUserMode: (bool: boolean) => void
}

const Table = React.memo((props: TablePropsType) => {
	return (
		<div className={style.wrapper}>
			<div className={style.wrap}>
				<span className={style.sp}>Name</span>
				<span className={style.sp}>Email</span>
				<span className={style.sp}>Position</span>
			</div>
			{props.users.length && <div>{props.users.map(user => {
				return (
					<div key={+user.id} className={style.wrap}>
						<span>{user.name}</span>
						<span>{user.email}</span>
						<span>{user.position}</span>
					</div>
				)
			})}</div>}
			<button className={style.btn} onClick={() => props.setAddUserMode(true)}>+ New</button>
		</div>
	);
});

export default Table;