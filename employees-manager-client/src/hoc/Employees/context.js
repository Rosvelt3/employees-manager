import React from 'react';

const EmployeeContext = React.createContext(null);

export const withEmployee = Component => props => (
  <EmployeeContext.Consumer>
    {employee => {
      return (
        //Return new component with employee service inserted
        <Component {...props} employee={employee} />
      )
    }}
  </EmployeeContext.Consumer>
);

export default EmployeeContext;