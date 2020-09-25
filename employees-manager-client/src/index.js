import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Get the default theme of the application and insert it
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

//Get the Department and Employee service component and insert int in the app
import Employee, { EmployeeContext } from './hoc/Employees';
import Department, { DepartmentContext } from './hoc/Departments';

ReactDOM.render(
  <EmployeeContext.Provider value={new Employee()}>
    <DepartmentContext.Provider value={new Department()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </DepartmentContext.Provider>
  </EmployeeContext.Provider>,
  document.getElementById('root')
);
