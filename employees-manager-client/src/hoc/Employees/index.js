import EmployeeContext, { withEmployee } from './context';
import Employee from './employees';

//Export the employee service class
export default Employee;

//Export the employee context and the 'withEmployee' hook to use with components
export { EmployeeContext, withEmployee };