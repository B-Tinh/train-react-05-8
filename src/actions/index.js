import * as types from "./../constants/ActionStyles";
import axios from 'axios';

export const logIn = (email, password) =>{
	return {
		type : types.LOGIN,
		email: email,
		password: password
	}
}
export const loginAPI = (email, password) =>{
	return (dispatch) => {
		console.log("check dispatch:",email, password)
			axios({
			method: "post",
			url: "https://terralogic-training.web.app/api/login",
			data:{
    			email: email,
				password: password
  			}
		}).then(res =>{
				localStorage.setItem("token", res.data.token);	
				console.log("token:",res.data.token);		
				console.log(res);
				dispatch(logIn(email, password))

			})
			.catch(er =>{
				alert("Check your email and password again")
			});
		};
};
export const signUp = (email, password ) =>{
	return {
		type : types.SIGNUP,
		email: email,
		password: password,
	
	}
}

export const signUpAPI= (email, password) =>{
	return (dispatch) => {
		axios({
				method: "post",
				url: "https://terralogic-training.web.app/api/sign_up",
				data:{
	    			email: email,
					password: password,
			
	  			}
			})
			.then(res =>{
				console.log("res", res);
				alert("Sign Up Success");
				dispatch(signUp(email, password ))
				
			})
			.catch(er =>{
				console.log("erro", er);
				alert("Sign Up Failed");
			});
	};
};

export const showProfile = state => {
	console.log(state);
  return {
    type: types.SHOW_PROFILE,
    state
  };
};
export const showProfileAPI = () => {
  return dispatch => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.firebaseapp.com/api/get_profile",
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log(res);
        dispatch(showProfile(res.data.data));
       })
      .catch(er => {});
  };
};

export const updateProfile = (state) =>{
	return {
		type : types.UPDATE_PROFILE,
		state
};
};
export const UPDATE_PROFILE_API= (state) =>{
  return dispatch => {
    var token = localStorage.getItem("token");
    console.log("token:", token);
    axios({
      method: "post",
      url: "https://terralogic-training.web.app/api/set_profile",
      headers: {
        "x-user-token": token
      },
      data:state
    })
      .then(res => {
        console.log(res);
        alert("Update Success");
        dispatch(updateProfile(res.data.data));
      })
      .catch(er => {
      	alert("Update Failed");
      });
  };
};