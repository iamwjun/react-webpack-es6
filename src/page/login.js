import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import img from '../assets/images/login-w-icon.png';
import axios from 'axios';
import { connect } from "react-redux"
import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

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
    }
    
	componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    
    fetchTweets() {
        this.props.dispatch(fetchTweets())
    }
    
    render() {
        return (
            <div id="login">
                <div id="login-button" onClick={this.fetchTweets.bind(this)}><img src={img}></img></div>
            </div>
        );
    }
}