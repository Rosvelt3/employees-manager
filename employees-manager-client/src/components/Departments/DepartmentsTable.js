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
  },
  deleteAction: {
    color: theme.palette.error.main,
  },
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

  const deleteDepartment = async (id) => {
    try {
      const result = await department.deleteDepartment(id);
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
            <TableRow key={department._id}>
              <TableCell>{department.name}</TableCell>
              <TableCell align="right">{department.description}</TableCell>
              <TableCell align="right">{department.location}</TableCell>
              <TableCell align="right">{department.phoneExtension}</TableCell>
              <TableCell align="right">
                <IconButton color="secondary"><Edit /></IconButton>
                <IconButton className={classes.deleteAction} onClick={() => deleteDepartment(department._id)}><Delete /></IconButton>
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
