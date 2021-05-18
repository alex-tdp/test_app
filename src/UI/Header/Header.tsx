import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

const Header = React.memo(() => {
	return (
		<div className={style.headerContainer}>
			<div >
				<NavLink className={style.link} to={'/'}>Main</NavLink>
			</div>
			<div >
				<NavLink className={style.link} to={'/counter'}>Counter</NavLink>
			</div>
		</div>
	);
});

export default Header;