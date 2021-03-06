import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import css from './styles/style.styl';
import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route  path='/view/:postID' component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

