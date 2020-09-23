import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  }
}));

function createDepartmentData(name, description, phoneExtension, location) {
  return { name, description, phoneExtension, location };
}

const departmentRows = [
  createDepartmentData('Department 1', 'This is the department 1', '201', 'x Place'),
  createDepartmentData('Department 2', 'This is the department 2', '202', 'x Place'),
  createDepartmentData('Department 3', 'This is the department 3', '203', 'x Place'),
  createDepartmentData('Department 4', 'This is the department 4', '204', 'x Place'),
];

const LatestDepartmentsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} variant="outlined">
      <Typography variant="h5" component="h2" color="primary">
        Latest Departments
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Phone Extension</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departmentRows.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.phoneExtension}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LatestDepartmentsTable;
