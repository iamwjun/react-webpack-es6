import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/styles.css';
import Routing from './router';
import store from './store';

var root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);
const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <Routing />
</Provider>, app);