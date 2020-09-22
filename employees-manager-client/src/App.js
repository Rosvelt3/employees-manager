import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Employees from './components/Employees/Employees';
import Departments from './components/Departments/Departments';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/employees" component={Employees} />
        <Route path="/departments" component={Departments} />
      </Switch>
    </Router>
  )
}

export default App;
