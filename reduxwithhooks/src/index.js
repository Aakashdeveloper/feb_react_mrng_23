import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './component/Routing';
import {store} from './redux/store';
import {Provider} from 'react-redux';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
// Store to view
root.render(
    <Provider store={store}>
        <Routing/>
    </Provider>
)