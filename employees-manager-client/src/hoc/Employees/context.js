import React from 'react';

const EmployeeContext = React.createContext(null);

export const withEmployee = Component => props => (
  <EmployeeContext.Consumer>
    {employee => {
      return (
        <Component {...props} employee={employee} />
      )
    }}
  </EmployeeContext.Consumer>
);

export default EmployeeContext;