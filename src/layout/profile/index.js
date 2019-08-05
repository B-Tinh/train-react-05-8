import React, {Component} from 'react';
import './styles.scss';

import Information from '../../components/information';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import history from '../../history';
import axios from 'axios';

class Profile extends Component{
	  constructor(props) {
    super(props);
    this.state = {};
  }
    onLogout = () => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.web.app/api/logout",
      headers: {
        "x-user-token": token
      }
    })
      .then(res => {
        console.log('Logout',res);
        history.push('/');
        localStorage.clear();

      })
      .catch(er => {
      	alert("ERROR");
      });
  };
	render(){
		return(
			<Router>
			<div>
				<Header />

				<div className="col-sm-12 ">
					<p className="title" data-toggle="dropdown">
     							 PROFILE
    				</p>
					<ul className="dropdown-menu menu">
		              <li>
		                <Link to="/profile">Profile</Link>
		              </li>
		              <li>
		                <Link to="/" onClick={this.onLogout}>Logout</Link>
		              </li>
		            </ul>	    		   		
				</div>	
				<div className="container">
					<div className="jumbotron between">
						<div className="main-content">							
							<Information />
						</div>
					</div>
				</div>
				<Footer />
			</div>
			</Router>




			)
	}
}

export default Profile;