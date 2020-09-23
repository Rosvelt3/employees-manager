import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: 30,
  }
}));

function createEmployeeData(idNumber, name, lastName, phone, department) {
  return { idNumber, name, lastName, phone, department };
}

const employeeRows = [
  createEmployeeData('121-234242343-4', 'Employee 1', 'Last Name', '809000000', 'Department 1'),
  createEmployeeData('121-234242343-4', 'Employee 2', 'Last Name', '809000000', 'Department 2'),
  createEmployeeData('121-234242343-4', 'Employee 3', 'Last Name', '809000000', 'Department 3'),
  createEmployeeData('121-234242343-4', 'Employee 4', 'Last Name', '809000000', 'Department 4'),
];

const LatestEmployeesTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} variant="outlined">
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
          {employeeRows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.idNumber}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LatestEmployeesTable;
