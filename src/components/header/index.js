import React, {Component} from 'react';
import './styles.scss';
import history from './../../history';

class Header extends Component{
  render(){
    return (
		<div>
			<div className="container">
				<header>
					<div className="logo-header">
						<img alt="logo-header" src="./images/terra-logo.png" />
					</div>					
				</header>
			</div>
		</div>
  );
  }
}

export default Header;
