import React, {Component} from 'react';
import './styles.scss';
import history from './../../history';

class Footer extends Component{
	render(){
		return(
			<div>
				<div className="container">
					<footer>
						<p className="copy">&copy; 2019 TERRALOGIC.INC.</p>
					</footer>
				</div>
			</div>
			)
	}
}

export default Footer;