import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img from '../assets/images/login-w-icon.png';
import code from '../assets/images/login.png';
import axios from 'axios';
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import Animate from 'rc-animate';

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enter: false,
        }
    }

    toggleAnimate = () => {
        this.setState({
            enter: !this.state.enter,
        });
        console.log(this.state)
    }
    
	componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    
    render() {
        const text = this.state.enter ? <div id="login-code" onClick={this.toggleAnimate.bind(this)}><img src={code}></img></div> : <div id="login-button" onClick={this.toggleAnimate.bind(this)}><img src={img}></img></div>;
        return (
            <div id="login">
                <Animate
                    showProp="visible"
                    transitionLeave={false}
                    transitionName="fade"
                >
                    {text}
                </Animate>
                {/* <div id="login-button" onClick={this.toggleAnimate.bind(this)}><img src={img}></img></div>
                <div id="login-code"><img src={code}></img></div> */}
            </div>
        );
    }
}