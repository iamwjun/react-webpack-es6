import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import img from '../assets/images/login-w-icon.png';
import code from '../assets/images/login.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUser, fetchToken } from '../actions/userActions';
import Code from '../components/Code';
import { subscribeToTimer } from '../components/socket.io-client';

@connect((store) => {
    return {
        user: store.user.user,
        fetchToken: store.user.fetched
    };
})

// https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connect: true,
            enter: true,
            sid: ''
        }
        this.props.dispatch(fetchToken())
    }

    toggleAnimate(){
        this.setState({
            enter: !this.state.enter,
            connect: false
        })
        console.log(this.state)
    }

    fetchToken() {        
        this.setState({
            enter: !this.state.enter,
            connect: false
        })
        // if(this.state.enter && this.state.connect){
        //     this.props.dispatch(fetchToken())
        // }
        this.setState({sid: this.props.user.sid})
        // this.forceUpdate()
    }

    render() {
        const qrcode = this.state.code ? <Code sid={this.state.sid}/> : '';      
        return (          
            <div id="login">
                <div key="1" id="login-code" className={this.state.enter ? 'login-base' : 'login-action'} onClick={this.fetchToken.bind(this)}>
                    <div className="qrcode">
                        <Code sid={this.state.sid}/>
                    </div>
                </div>
                <div key="2" id="login-button" className={this.state.enter ? 'button-base' : 'button-action'} onClick={this.fetchToken.bind(this)}><img src={img}></img></div>
            </div>
        );
    }
}