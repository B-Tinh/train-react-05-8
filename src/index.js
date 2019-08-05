import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Store

import myReducer from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import history from './history';

import { createStore, applyMiddleware} from 'redux';
const store = createStore(myReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>, 
	document.getElementById('root')
	);

serviceWorker.unregister();
