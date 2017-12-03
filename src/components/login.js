import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props) {
		super(props);
		this.state = {
			isRight: true
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		alert(1);		
    }
    
    render() {
        return (
            <div id="login">
                <div id="login-button" onClick={this.handleClick}><img src="static/images/login-w-icon.png"></img></div>
            </div>        
        );
    }
}
export default Login;