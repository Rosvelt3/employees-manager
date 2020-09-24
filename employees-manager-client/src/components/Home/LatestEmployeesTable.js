import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: 30,
  }
}));

const LatestEmployeesTable = ({ employees }) => {
  const classes = useStyles();

  if (!employees) return false;

  return (
    <TableContainer className={classes.root} component={Paper} elevation={2}>
      <Typography variant="h5" component="h2" color="primary">
        Latest Employees
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID Number</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Department</TableCell>
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
            </TableRow>
          ))
            :
            <TableRow >
              <TableCell colSpan="5">
                <Typography variant="h5" component="h2" align="center">No employees found</Typography>
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LatestEmployeesTable;
