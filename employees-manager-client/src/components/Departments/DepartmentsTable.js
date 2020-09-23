import React, { useEffect, useState } from 'react';
import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';
import { withDepartment } from '../../hoc/Departments/context';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const DepartmentsTable = ({ department }) => {
  const [departments, setDepartments] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await department.getAllDepartments();
      setDepartments(result);
    };

    fetchDepartments();
  }, [department])

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
          {departments.map(department => (
            <TableRow key={department.name}>
              <TableCell>{department.name}</TableCell>
              <TableCell align="right">{department.description}</TableCell>
              <TableCell align="right">{department.location}</TableCell>
              <TableCell align="right">{department.phoneExtension}</TableCell>
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

export default withDepartment(DepartmentsTable);
