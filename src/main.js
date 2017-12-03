import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
   render() {
      return (          
         <Router>
             <Fragment>
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={Login} />
               </Switch>
               </Fragment>
         </Router>         
      );
   }
}
export default App;