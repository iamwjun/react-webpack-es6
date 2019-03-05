import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './page/Index';
import Login from './page/Login';
import Add from './page/Add';
import Edit from './page/Edit';
import Filter from './page/Filter';

class Routing extends Component {
    render() {
        return (          
            <Router>
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/add' component={Add} />
                    <Route exact path='/edit/:id' component={Edit} />
                    <Route exact path='/filter' component={Filter} />
                </Switch>
            </Router>
        );
    }
}
export default Routing;