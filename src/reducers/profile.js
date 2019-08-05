
import * as types from "./../constants/ActionStyles";
import axios from 'axios';


var initalState = {
	display_name:'',
	display_info:'',
	phone:'',
	avatar:''
};

var myReducer = (state =initalState, action ) => {
	switch(action.type){
		case types.SHOW_PROFILE:
      		console.log("dataProfile: ", action.state);
      	 return {
        ...state,
        display_name: action.state.display_name,
        display_info: action.state.display_info,
        phone: action.state.phone,
        avatar: action.state.avatar
      };

		 case types.UPDATE_PROFILE:
	     	console.log("data", action.state);
	     return {
	       ...action.state
	     };
		 default: return state;
	}
	
	}
export default myReducer;
