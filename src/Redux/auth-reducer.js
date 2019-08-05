const SET_USER_DATE = 'SET_USER_DATE';


let initialState = {
	userId: 1393,
	email: 'null',
	login: 'null',
	isAuth: false
	// isFetching: false

};

const authReducer = (state = initialState, action) => {

	switch (action.type) {
		case SET_USER_DATE:
			return {
				...state,
				...action.data,
				isAuth: true
			};

	}
	return state;
};

export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATE, data:{id, email, login}});


export default authReducer;