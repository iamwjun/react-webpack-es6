import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from "react-redux"
import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"
import Filter from '../components/Filter';
import Query from '../components/Query';
import List from '../components/List';

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
export default class Index extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        tweets: PropTypes.array
    }
    constructor(props) {
        super(props);
        this.props.dispatch(fetchTweets('filter'))
    }

    componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    
    fetchTweets() {
        this.props.dispatch(fetchTweets())
        // console.log(this.props)
    }
    
    render() {
        const { tweets } = this.props;
        
        if (tweets.news && !tweets.news.length) {
            // return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
            return <div>没有更多数据了...</div>
        }
        
        // const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.title}</li>)
        
        return (
            <div className="dj_newBorder">
                <Fragment>
                    <Filter />
                    <Query />
                    <List data={tweets.news ? tweets.news : []} count={tweets.count ? tweets.count : 0}/>
                </Fragment>
            </div>
        );
    }
}