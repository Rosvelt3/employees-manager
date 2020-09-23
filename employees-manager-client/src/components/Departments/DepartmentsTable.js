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

function createDepartmentData(name, description, phoneExtension, location) {
  return { name, description, phoneExtension, location };
}

const departmentRows = [
  createDepartmentData('Department 1', 'This is the department 1', '201', 'x Place'),
  createDepartmentData('Department 2', 'This is the department 2', '202', 'x Place'),
  createDepartmentData('Department 3', 'This is the department 3', '203', 'x Place'),
  createDepartmentData('Department 4', 'This is the department 4', '204', 'x Place'),
  createDepartmentData('Department 5', 'This is the department 5', '205', 'x Place'),
  createDepartmentData('Department 6', 'This is the department 6', '206', 'x Place'),
  createDepartmentData('Department 7', 'This is the department 7', '207', 'x Place'),
  createDepartmentData('Department 8', 'This is the department 8', '208', 'x Place'),
  createDepartmentData('Department 9', 'This is the department 9', '209', 'x Place'),
  createDepartmentData('Department 10', 'This is the department 10', '210', 'x Place'),
  createDepartmentData('Department 11', 'This is the department 11', '211', 'x Place'),
  createDepartmentData('Department 12', 'This is the department 12', '212', 'x Place'),
];

const DepartmentsTable = () => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} variant="outlined">
      <div className={classes.row}>
        <Typography variant="h5" component="h2" color="primary">
          Departments
        </Typography>
        <Button color="primary" variant="contained" startIcon={<Add />}>Add Department</Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Phone Extension</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departmentRows.map(row => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.phoneExtension}</TableCell>
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

export default DepartmentsTable;
