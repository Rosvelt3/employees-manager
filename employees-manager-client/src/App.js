import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Employees from './components/Employees/Employees';
import AddEmployee from './components/Employees/AddEmployee';
import UpdateEmployee from './components/Employees/UpdateEmployee';
import Departments from './components/Departments/Departments';
import AddDepartment from './components/Departments/AddDepartment';
import UpdateDepartment from './components/Departments/UpdateDepartment';
import Navbar from './components/Navbar';
import NotFound from './components/Notfound';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/employees" component={Employees} exact />
          <Route path="/add-employee" component={AddEmployee} exact />
          <Route path="/update-employee/:id" component={UpdateEmployee} exact />

          <Route path="/departments" component={Departments} exact />
          <Route path="/add-department" component={AddDepartment} exact />
          <Route path="/update-department/:id" component={UpdateDepartment} exact />

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
