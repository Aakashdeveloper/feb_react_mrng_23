import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './container/Home';
import store from './store/storeFile';
import {Provider} from 'react-redux';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
// Store to view
root.render(
    <Provider store={store}>
        <Home/>
    </Provider>
)