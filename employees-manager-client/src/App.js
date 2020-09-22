import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import Departments from './components/Departments/Departments';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/employees" component={Employees} />
          <Route path="/departments" component={Departments} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
