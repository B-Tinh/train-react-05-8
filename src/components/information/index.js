import React, {Component} from 'react';
import './styles.scss';
import { connect } from 'react-redux';
import * as actions from './../../actions';
import history from './../../history';

class Information extends Component{
	

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	    this.state = {
	    		display_name:'',
				display_info:'',
				phone:'',

		    };
	}
	handleChange(event){
    	var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    });
	}

	onSave = (e) =>{
        e.preventDefault();
        console.log(this.state)
         this.props.onUpdateProfile(this.state);
     }

     componentWillMount() {
    this.props.onShowProfile();
 	 }
  	componentWillReceiveProps(nextProps) {
    	console.log('nextProps',nextProps);
    	var { profile } = nextProps;
    	this.setState({
	      display_name: profile.display_name,
	      display_info: profile.display_info,
	      phone: profile.phone
	  });
  }
 
  state ={
  	Loading : false
  }
  myFunction = () =>{
  	this.setState({
  		Loading : true
  	});
  	setTimeout(() => {
  		this.setState({
  			Loading :false
  		});
  	}, 2000)
  }
  render(){
  	if (localStorage.getItem("token") === null) {
  			history.push("/");		
		}
		var { display_name, display_info, phone, avatar } = this.state;
		const {Loading} = this.state ;
    return (
		<div>
			<div className="container">
				<div className="container">
				<div className="avatar">
					<img alt="avatar" src="./images/55089.png" />
					<div className="penis">
						<img alt="pencil" src="./images/SoftwareIcons-68-512.png" />
					</div>
				</div>
				</div>
				<div className="row form-profile">
	    				<form onSubmit = {this.onSave}>
	    					<div className="formProfile">
	    						<div className="col-sm-6 form-left">
			    					<p className="text-form-profile">Display Name</p>						    	
							    	<input className="form" type="text" placeholder="Your Name" value={display_name} name="display_name" onChange={this.handleChange}  />						    	
							    	<p className="text-form-profile">Email</p>						    	
							    	<input className="form" type="email" placeholder="Your Company Email" name="email"  />		
							    	<p className="text-form-profile">New Password</p>						  
							    	<input className="form" type="password" placeholder="Enter New Password" name="psw" />							    	
			    				</div>
			    				<div className="col-sm-6 form-right">
			    					<p className="text-form-profile">Display Info</p>						    	
							    	<input className="form" type="text" placeholder="Your Info" value={display_info} name="display_info" onChange={this.handleChange}  />						    	
							    	<p className="text-form-profile">Phone Number</p>						    	
							    	<input className="form" type="text" placeholder="Phone" value={phone} name="phone" onChange={this.handleChange}  />	
			    				    <p className="text-form-profile">Confirm Password</p>						  
							    	<input className="form" type="password" placeholder="Confirm Password" name="confirmpsw"  />
			    				</div>
	    					</div>
	    					<div className="button-update">
						    		<button className="update" type="submit" onClick ={this.myFunction}>
						    		{Loading && <i className="fa fa-spinner fa-spin" disabled={Loading}></i>}UPDATE PROFILE</button>
						    </div>	

	    				</form>
	    			</div>
			</div>
		</div>
  );
  }
}

const mapStateToProps = (state) => {
	return {
		profile: state.profile
	}
};
const mapDispatchToProps = (dispatch, props) => {
	return{
		onShowProfile: () => {
      		dispatch(actions.showProfileAPI());
   	},
		onUpdateProfile : (state) =>{
			dispatch(actions.UPDATE_PROFILE_API(state));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Information);
