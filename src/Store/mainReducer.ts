import { Dispatch } from "redux";
import { API } from "../API/api";

const initialState: MainReducerStateType = {
	users: [],
	count: 0,
};

export const mainReducer = (state: MainReducerStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'ADD-USERS': {
			return { ...state, count: action.payload.count, users: [...action.payload.users] }
		}
		case 'ADD-USER': {
			return { ...state, aggregatedUsers: [...state.users, action.payload.user], count: state.count + 1 }
		}
		default: {
			return state;
		}
	};
};

//Actions
export const setUsers = (payload: { users: Array<UserType>, count: number }) => {
	return { type: 'ADD-USERS', payload } as const
};
export const setUser = (payload: { user: UserType }) => {
	return { type: 'ADD-USER', payload } as const
};
export const increasePageCount = () => {
	return { type: 'INCREASE-PAGE' } as const
};
export const decreasePageCount = () => {
	return { type: 'DECREASE-PAGE' } as const
};

//Thunk
export const getUsers = (page?: number) => {
	return (dispatch: Dispatch) => {
		API.getUsers(page)
			.then(res => {
				dispatch(setUsers({ users: res.data.items, count: res.data.count }))
			})
			.catch(err => console.log(err.message))
	}
};

export const addUser = (name: string, email: string, position: string) => {
	return (dispatch: Dispatch) => {
		API.addUser(name, email, position)
			.then(res => dispatch(setUser(res.data)))
			.catch(err => console.log(err.message))
	}
};

//TYPES
export type UserType = {
	id: String,
	name: String,
	email: String
	position: String
};
type MainReducerStateType = {
	users: Array<UserType>,
	count: number,
};
type ActionsType = ReturnType<typeof setUsers>
	| ReturnType<typeof setUser>
	| ReturnType<typeof increasePageCount>
	| ReturnType<typeof decreasePageCount>;