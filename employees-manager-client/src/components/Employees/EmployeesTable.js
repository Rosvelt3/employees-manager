import React, { useState } from 'react';
import { Button, IconButton, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip, Typography } from '@material-ui/core';
import { Add, Delete, Edit } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  bottomRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  deleteAction: {
    color: theme.palette.error.main,
  },
}));

const EmployeesTable = ({ employees, deleteEmployee }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
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
          {employees.length !== 0 ? employees
            .filter(employee => {
              if (searchText) {
                const curatedSearchTerm = searchText.trim().toLowerCase();
                const curatedDepartmentName = employee.department.name.trim().toLowerCase();
                return curatedSearchTerm.includes(curatedDepartmentName);
              } else {
                return true;
              }
            })
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(employee => (
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
      <div className={classes.bottomRow}>
        <TextField label="Department filter" variant="outlined" value={searchText} onChange={(e) => setSearchText(e.target.value)}></TextField>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={employees.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={(e, newPage) => setPage(newPage)}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </TableContainer>
  )
}

export default EmployeesTable;
