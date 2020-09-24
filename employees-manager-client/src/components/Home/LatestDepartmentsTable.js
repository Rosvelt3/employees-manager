import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    marginTop: 30
  }
}));

const LatestDepartmentsTable = ({ departments }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root} component={Paper} elevation={2}>
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
          {departments.length !== 0 ? departments.map(department => (
            <TableRow key={department._id}>
              <TableCell>{department.name}</TableCell>
              <TableCell align="right">{department.description}</TableCell>
              <TableCell align="right">{department.location}</TableCell>
              <TableCell align="right">{department.phoneExtension}</TableCell>
            </TableRow>))
            :
            <TableRow >
              <TableCell colSpan="4">
                <Typography variant="h5" component="h2" align="center">No departments found</Typography>
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LatestDepartmentsTable;
