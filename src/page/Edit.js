import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getTweet } from "../actions/tweetsActions";
import Form from "../components/Form";

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