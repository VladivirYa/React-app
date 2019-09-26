import {authAPI} from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE';


let initialState = {
	userId: 'null',
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
				...action.payload
				// isAuth: true
			};
	}
	return state;
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATE, payload:{id, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) =>{

	authAPI.me().then(response => {
		if( response.data.resultCode === 0){
			let {id, email, login} = response.data.data;
			dispatch(setAuthUserData(id, email, login, true));
		}
	});
};

export const login = (email, password, rememberMe) =>(dispatch) =>{
         authAPI.login(email, password, rememberMe).then(response =>{
         	if(response.data.resultCode === 0){
					dispatch(getAuthUserData());
	         }
         })
};

export const logout = () =>(dispatch) =>{
	authAPI.logout().then(response =>{
		if(response.data.resultCode === 0){
			dispatch(setAuthUserData(null, null, null, false));
		}
	})
};

export default authReducer;