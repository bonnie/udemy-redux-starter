import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// route is a react component that provides configuration for url -> component
import { BrowserRouter, Route } from 'react-router-dom'

import PostsIndex from './containers/posts_index'
import PostsShow from './containers/posts_show'
import PostsNew from './components/posts_new'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/:id" component={PostsShow} />
        <Route path="/posts/new" component={PostsNew} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
