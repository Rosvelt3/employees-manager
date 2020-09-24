import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';
import Employee, { EmployeeContext } from './hoc/Employees';
import Department, { DepartmentContext } from './hoc/Departments';

if (localStorage.getItem("theme")) {
  theme.palette.primary.main = localStorage.getItem("theme");
} else {
  localStorage.setItem("theme","#0d47a1");
}

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
