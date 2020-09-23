import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import DepartmentsTable from './DepartmentsTable';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
}));

const Departments = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <DepartmentsTable />
    </Container>
  )
}

export default Departments;
