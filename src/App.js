import React, { Component } from 'react';
import {BrowserRouter, NavLink, Route, Switch, Redirect} from 'react-router-dom';
import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Home from './containers/Home/Home';
import './App.css';

class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <div className="App">
            <header>
              <nav>
                <ul>
                  <li>
                    <NavLink to="/users" exact>Users</NavLink>
                  </li>
                  <li>
                    <NavLink to="/courses" exact>Courses</NavLink>
                  </li>
                </ul>
              </nav>
            </header>
            <Switch>
              <Route path="/courses" component={Courses} />
              <Route path="/users" component={Users} />
              <Route path="/" exact component={Home} />
              <Redirect from="/all-courses" to="/courses" />
              <Route render={() => <h1>Not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
