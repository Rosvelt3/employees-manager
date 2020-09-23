import React from 'react';
import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

function createEmployeeData(idNumber, name, lastName, phone, department) {
  return { idNumber, name, lastName, phone, department };
}

const employeeRows = [
  createEmployeeData('121-234242343-4', 'Employee 1', 'Last Name', '809000000', 'Department 1'),
  createEmployeeData('121-234242344-4', 'Employee 2', 'Last Name', '809000000', 'Department 2'),
  createEmployeeData('121-234242345-4', 'Employee 3', 'Last Name', '809000000', 'Department 3'),
  createEmployeeData('121-234242346-4', 'Employee 4', 'Last Name', '809000000', 'Department 4'),
  createEmployeeData('121-234242347-4', 'Employee 5', 'Last Name', '809000000', 'Department 5'),
  createEmployeeData('121-234242348-4', 'Employee 6', 'Last Name', '809000000', 'Department 6'),
  createEmployeeData('121-234242349-4', 'Employee 7', 'Last Name', '809000000', 'Department 7'),
  createEmployeeData('121-234242350-4', 'Employee 8', 'Last Name', '809000000', 'Department 8'),
  createEmployeeData('121-234242351-4', 'Employee 9', 'Last Name', '809000000', 'Department 9'),
  createEmployeeData('121-234242352-4', 'Employee 10', 'Last Name', '809000000', 'Department 10'),
  createEmployeeData('121-234242353-4', 'Employee 11', 'Last Name', '809000000', 'Department 11'),
  createEmployeeData('121-234242354-4', 'Employee 12', 'Last Name', '809000000', 'Department 12'),
  createEmployeeData('121-234242355-4', 'Employee 13', 'Last Name', '809000000', 'Department 13')
];

const EmployeesTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} variant="outlined">
      <div className={classes.row}>
        <Typography variant="h5" component="h2" color="primary">
          Employees
        </Typography>
        <Button color="primary" variant="contained" startIcon={<Add />}>Add Employee</Button>
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
          {employeeRows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.idNumber}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">
                <IconButton color="primary"><Edit /></IconButton>
                <IconButton color="secondary"><Delete /></IconButton>
              </TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default EmployeesTable;
