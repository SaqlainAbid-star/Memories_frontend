import React from 'react';
import ReactDOM from 'react-dom';
// initialize redux
// redux provider is going to keep track of that store which is global state
// and that allows us to access that store from anywhere inside of the app
// we can access that state from anywhere
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
// Background Image
import './index.css'

import App from './App'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    // we can wrap our application with a provider component 
    // the store is equal to the store we created
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
    );

