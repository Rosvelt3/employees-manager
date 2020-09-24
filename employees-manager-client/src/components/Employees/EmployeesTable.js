import React from 'react';
import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';


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
  }
}));

const EmployeesTable = ({ employees, deleteEmployee }) => {
  const history = useHistory();
  const classes = useStyles();

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
          {employees.length !== 0 ? employees.map(employee => (
            <TableRow key={employee._id}>
              <TableCell component="th" scope="row">
                {employee.idNumber}
              </TableCell>
              <TableCell align="right">{employee.name}</TableCell>
              <TableCell align="right">{employee.lastName}</TableCell>
              <TableCell align="right">{employee.phone}</TableCell>
              <TableCell align="right">{employee.department.name}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edit">
                  <IconButton color="secondary" onClick={() => history.push(`/update-employee/${employee._id}`)}><Edit /></IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton className={classes.deleteAction} onClick={() => deleteEmployee(employee._id)}><Delete /></IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>))
            :
            <TableRow >
              <TableCell colSpan="6">
                <Typography variant="h5" component="h2" align="center">No employees found</Typography>
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable;
