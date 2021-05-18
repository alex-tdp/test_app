import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCount, resetCount } from '../../Store/counterReducer';
import { AppRootStateType } from '../../Store/store';
import style from './Counter.module.css';

const Counter = React.memo(() => {

	const dispatch = useDispatch();
	const count = useSelector<AppRootStateType, number>(state => state.counter.count);

	const onAddBtnClick = () => {
		dispatch(addToCount());
	};

	const onResetBtnClick = () => {
		dispatch(resetCount());
	};
 
	return (
		<div className={style.counterWrapper}>
			<div className={style.count}>{count}</div>
			<div>
				<button className={style.btn} onClick={onAddBtnClick}>Add</button>
				<button className={style.btn} onClick={onResetBtnClick}>Reset</button>
			</div>
		</div>
	);
});

export default Counter;