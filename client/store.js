import {createStore, compose} from 'redux';
import {suncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer,defaultState);

export const history = suncHistoryWithStore(browserHistory, store);

export default store;