import React from 'react';

const DepartmentContext = React.createContext(null);

export const withDepartment = Component => props => (
  <DepartmentContext.Consumer>
    {department => {
      return (
        <Component {...props} department={department} />
      )
    }}
  </DepartmentContext.Consumer>
);

export default DepartmentContext;