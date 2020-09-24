import React, { useState } from 'react';
import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@material-ui/core';
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
  },
}));

const DepartmentsTable = ({ departments, handleDelete }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const history = useHistory();
  const classes = useStyles();

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer className={classes.root} component={Paper} elevation={2}>
      <div className={classes.row}>
        <Typography variant="h5" component="h1" color="primary">
          Departments
        </Typography>
        <Button component={Link} to="/add-department" color="primary" variant="contained" startIcon={<Add />}>Add Department</Button>
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
          {departments.length !== 0 ? departments
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(department => (
              <TableRow key={department._id}>
                <TableCell>{department.name}</TableCell>
                <TableCell align="right">{department.description}</TableCell>
                <TableCell align="right">{department.location}</TableCell>
                <TableCell align="right">{department.phoneExtension}</TableCell>
                <TableCell align="right">
                  <Tooltip title="Edit">
                    <IconButton color="secondary" onClick={() => history.push(`/update-department/${department._id}`)}><Edit /></IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton className={classes.deleteAction} onClick={() => handleDelete(department._id)}><Delete /></IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>))
            :
            <TableRow >
              <TableCell colSpan="5">
                <Typography variant="h5" component="h2" align="center">No departments found</Typography>
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={departments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={(e, newPage) => setPage(newPage)}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default DepartmentsTable;
