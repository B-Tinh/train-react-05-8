import {combineReducers} from 'redux';
import tasks from './tasks';
import profile from './profile';


const myReducer = combineReducers({
	tasks,
	profile
});

export default myReducer;