import React, {Component} from 'react';
import './styles.scss';
import Register from '../../layout/register';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import history from './../../history';


class Left extends Component{
	constructor(props) {
      super(props);
      this.signIn = this.signIn.bind(this);
      this.onHandleChange = this.onHandleChange.bind(this);
      this.state = {
        email : '',
        password : '',
        isLoading: false,
        token : ''
      };
    }

  signIn(event){
    event.preventDefault();
    this.props.onLogin(this.state.email,this.state.password);

  }
  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      isLoading: nextProps.tasks.isLoading
    });
    console.log("check nextProps",nextProps);
  }

  state = {
    Loading : false
  }

  myFunction = () => {
      this.setState({
        Loading :true
      });
    setTimeout(() => {
      this.setState({
        Loading: false
      });
    }, 2000)
    }

  

  render(){
    if (this.state.isLoading){
       history.push('/profile');
    }
    const {Loading} = this.state;
    return (


	    <div>
	      	<div className="col-md-12 Left">
				<div className="Login">
					<h2>LOGIN</h2>
					<form className="formLogin" action="" onSubmit={this.signIn}>
						Email:<br />
						<input 
            className="Email"
            type="text"  
            name ="email" 
            onChange={this.onHandleChange} 
            
            />
						<br />
						Password:<br />
						<input className="Pass" 
            type="password"  
            name ="password" 
            onChange={this.onHandleChange}
            
            />
						<button type="submit" className="btn btn-default button" onClick={this.myFunction}>
            {Loading && <i className="fa fa-spinner fa-spin" disabled={Loading}></i>}
            LOGIN
            </button>
						<Link to ="/Signup" className="register" ><button type="submit" className="btn btn-default register">SIGN UP</button></Link>
					</form>					
					<p>&copy; 2019 Terralogic.Inc</p>
				</div>
			</div>
	    </div>
  );
    
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
};

const mapDispatchToProps = (dispatch, props) =>{
  return{
    onLogin :(email, password) =>{
      dispatch(actions.loginAPI(email, password));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Left);