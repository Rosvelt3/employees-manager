import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import EmployeesTable from './EmployeesTable';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
}));

const Employees = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <EmployeesTable />
    </Container>
  )
}

export default Employees;
