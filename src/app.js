import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './assets/css/styles.css';
import Routing from './router';
import store from './store';
import Layout from './page/Layout';

const app = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <Routing />
</Provider>, app);