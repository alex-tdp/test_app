const initialState: CounterReducerStateType = {
	count: 0
}

export const counterReducer = (state: CounterReducerStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case 'ADD-TO-COUNT': {
			return {...state, count: state.count + 1}
		}
		case 'RESET-COUNT': {
			return {...state, count: 0}
		}
		default: {
			return state
		}
	}
}

//Actions

export const addToCount = () => {
	return { type: 'ADD-TO-COUNT' } as const
}

export const resetCount = () => {
	return { type: 'RESET-COUNT' } as const
}

//TYPES

type CounterReducerStateType = {
	count: number
};
type ActionsType = ReturnType<typeof addToCount> | ReturnType<typeof resetCount>;