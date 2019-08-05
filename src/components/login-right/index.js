import React, {Component} from 'react';
import './styles.scss';


class Right extends Component{
  render(){
    return (
	    <div>
	    	<div className="col-md-12 Right">
				<div className="logo">
					<img alt="logo" src="./images/terra-logo.png" />
					<p>We are family</p>
				</div>
				<div className="Right-Bot">
					<p>&copy; 2019 Terralogic.Inc</p>
				</div>
			</div>
	      	
	    </div>
  );
  }
}

export default Right;