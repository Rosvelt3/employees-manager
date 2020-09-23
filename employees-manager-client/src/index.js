import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import Employee, { EmployeeContext } from './hoc/Employees';
import Department, { DepartmentContext } from './hoc/Departments';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeContext.Provider value={new Employee()}>
      <DepartmentContext.Provider value={new Department()}>
        <App />
      </DepartmentContext.Provider>
    </EmployeeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
