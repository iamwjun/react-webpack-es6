import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
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
    constructor(props) {
        super(props);
        this.props.dispatch(fetchTweets())
    }

    componentWillMount() {
        this.props.dispatch(fetchUser())
    }
    
    fetchTweets() {
        this.props.dispatch(fetchTweets())
        console.log(this.props)
    }
    
    render() {
        // return (
        //     <div className="dj_newBorder">
        //         <Fragment>
        //             <Filter />
        //             <Query />
        //             <List />
        //         </Fragment>
        //     </div>
        // );
        const { user, tweets } = this.props;
        
        if (!tweets.length) {
            // return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
            return <div>loading...</div>
        }
        
        const mappedTweets = tweets.map(tweet => <li key={tweet.id}>{tweet.title}</li>)
        
        // return <div>
        //     <h1>{user.name}</h1>
        //     <ul>{mappedTweets}</ul>
        // </div>
        return (
            <div className="dj_newBorder">
                <Fragment>
                    <Filter />
                    <Query />
                    <List data={tweets}/>
                </Fragment>
            </div>
        );
    }
}