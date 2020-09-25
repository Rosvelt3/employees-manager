import React from 'react';

const DepartmentContext = React.createContext(null);

export const withDepartment = Component => props => (
  <DepartmentContext.Consumer>
    {department => {
      return (
        //Return new component with department service inserted
        <Component {...props} department={department} />
      )
    }}
  </DepartmentContext.Consumer>
);

export default DepartmentContext;