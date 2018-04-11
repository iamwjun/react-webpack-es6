import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { fetchUser } from "../actions/userActions";
import { addTweet, fetchConfig, fetchBaseURL, getTweet } from "../actions/tweetsActions";
import Editor from '../components/Editor';
import axios, { post } from 'axios'
import DatePicker from 'antd/lib/date-picker';
import message from 'antd/lib/message';
import Select from 'antd/lib/select';
const Option = Select.Option;
import 'antd/dist/antd.min.css';
import Form from '../components/Form';

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.props.dispatch(getTweet(this.props.match.params.id))
    }

    render() {
        const { user, tweets } = this.props;

        return (
            <Form data={tweets}/>
        );
    }
}