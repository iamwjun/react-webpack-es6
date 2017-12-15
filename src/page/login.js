import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import img from '../assets/images/login-w-icon.png';
import code from '../assets/images/login.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';
import QRCode from 'qrcode.react';
import { subscribeToTimer } from '../components/socket.io-client';

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
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
    }

    toggleAnimate(){
        console.log(this.state)
        this.setState({
            enter: !this.state.enter
        })
        if(this.state.enter && this.state.connect){
            subscribeToTimer((err, timestamp) => this.setState({ 
                sid: '5c3c1496f28b48ffb4231c1692e1eb76'
            }));
        }
    }
    
    render() {        
        return (
            <div id="login">
                <div key="1" id="login-code" className={this.state.enter ? 'login-base' : 'login-action'} onClick={this.toggleAnimate.bind(this)}>
                    <div className="qrcode">
                    <QRCode
                        value={"http://wx.eeparking.com/demo2.0/parking/confirm.php?sid="+ this.state.sid}
                        size={184}
                        bgColor={"#fff"}
                        fgColor={"#333"}
                        level={"M"}
                    />
                    </div>                    
                </div>
                <div key="2" id="login-button" className={this.state.enter ? 'button-base' : 'button-action'} onClick={this.toggleAnimate.bind(this)}><img src={img}></img></div>
            </div>
        );
    }
}