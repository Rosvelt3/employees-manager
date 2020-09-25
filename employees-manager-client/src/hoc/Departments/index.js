import DepartmentContext, { withDepartment } from './context';
import Department from './departments';

//Export the department service class
export default Department;

//Export the department context and the 'withDepartment' hook to use with components
export { DepartmentContext, withDepartment };