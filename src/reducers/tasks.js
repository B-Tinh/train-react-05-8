import * as types from './../constants/ActionStyles';
import axios from 'axios';


var initalState = {
	email : '',
    password : '',
    isLoading: false,
    token : ''
};

var myReducer = (state = initalState, action) =>{
	switch(action.type){
		case types.LOGIN:
			alert("Login Success");
			console.log('check', action.isLoading);
			return{
				...state,
				email : action.email,
		        password : action.password,
		        isLoading: true,
		        token : action.token
			};

		case types.SIGNUP:
		return{
			...state,
			email : action.email,
			password : action.password,
			isLoading: true
		}
		default: return state;
	}
}

export default myReducer;