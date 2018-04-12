export default function reducer(state={
    tweets: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TWEETS": {
        return {...state, fetching: true}
      }
      case "FETCH_TWEETS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TWEETS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tweets: action.payload,
        }
      }
      case "GET_TWEET": {
        return {...state, fetching: true}
      }
      case "ADD_TWEET": {
        return {
          ...state,
          tweets: action.payload,
        }
      }
      case "UPDATE_TWEET": {
        // const { id, text } = action.payload
        // const newTweets = [...state.tweets]
        // const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id)
        // newTweets[tweetToUpdate] = action.payload;

        return {
          ...state,
          tweets: action.payload,
        }
      }
      case "DELETE_TWEET": {
        return {
          ...state,
          tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
        }
      }
    }

    return state
}
