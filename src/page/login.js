import PropTypes from 'prop-types';
import React, { Component } from 'react';
import img from '../assets/images/login-w-icon.png';
import { connect } from 'react-redux';
import { fetchToken } from '../actions/userActions';
import Code from '../components/Code';

// https://medium.com/dailyjs/combining-react-with-socket-io-for-real-time-goodness-d26168429a34
@connect((store) => {
    return {
        user: store.user.user,
        fetchToken: store.user.fetched
    };
})

export default class Login extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        user: PropTypes.array
    }

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
        //console.log(this.state)
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
        // const qrcode = this.state.code ? <Code sid={this.state.sid}/> : '';      
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