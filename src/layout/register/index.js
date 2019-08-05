import React, {Component} from 'react';
import './styles.scss';
import RegisterLeft from '../../components/register-left';
import Right from '../../components/login-right';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import history from './../../history';

class Register extends Component{

  
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
            <RegisterLeft />
          </div>
        </div>
      </div>
    </div>
    </Router>

  );
  }
}

export default Register;
