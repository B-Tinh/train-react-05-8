import React, {Component} from 'react';
import './style.scss';
import Left from '../../components/login-left';
import Right from '../../components/login-right';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import RegisterLeft from '../../components/register-left';
import Profile from '../profile';
import axios from 'axios';

class Login extends Component{
  render(){
    return (
    	<Router>
		<div>
			<div className="container content">
				<div className="row">
					<div className="col-md-6 Right">
						<Right />
					</div>
					<div className="col-md-6 Left">
						<Route path="/" exact component={Left} />
						<Route path="/Signup" component={RegisterLeft} />
					</div>					
				</div>
			</div>
		</div>
		</Router>

  );
  }
}

export default Login;
