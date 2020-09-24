import React, { useEffect, useState } from 'react';
import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { withEmployee } from '../../hoc/Employees/context'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteAction: {
    color: theme.palette.error.main,
  },
}));

const EmployeesTable = ({ employee }) => {
  const [employees, setEmployees] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchEmployees = async () => {
      const result = await employee.getAllEmployees();
      setEmployees(result);
    };

    fetchEmployees();
  }, [employee])

  const deleteEmployee = async (id) => {
    try {
      const result = await employee.deleteEmployee(id);
      alert(result);
    }
    catch (err) {
      throw err;
    }
  }

  return (
    <TableContainer className={classes.root} component={Paper} elevation={2}>
      <div className={classes.row}>
        <Typography variant="h5" component="h1" color="primary">
          Employees
        </Typography>
        <Button component={Link} to="/add-employee" color="primary" variant="contained" startIcon={<Add />}>Add Employee</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map(employee => (
            <TableRow key={employee._id}>
              <TableCell component="th" scope="row">
                {employee.idNumber}
              </TableCell>
              <TableCell align="right">{employee.name}</TableCell>
              <TableCell align="right">{employee.lastName}</TableCell>
              <TableCell align="right">{employee.phone}</TableCell>
              <TableCell align="right">{employee.department.name}</TableCell>
              <TableCell align="right">
                <IconButton color="secondary"><Edit /></IconButton>
                <IconButton className={classes.deleteAction} color="secondary" onClick={() => deleteEmployee(employee._id)}><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withEmployee(EmployeesTable);
