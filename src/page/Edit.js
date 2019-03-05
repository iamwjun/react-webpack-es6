import PropTypes from 'prop-types';
import React, { Component } from 'react';
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
    static propTypes = {
        dispatch: PropTypes.func,
        tweets: PropTypes.array,
        match: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.props.dispatch(getTweet(this.props.match.params.id))
    }

    render() {
        const { tweets } = this.props;

        return (
            <Form data={tweets}/>
        );
    }
}