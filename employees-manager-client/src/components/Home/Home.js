import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Person, Group, Business } from '@material-ui/icons';

import InfoCard from './InfoCard';
import LatestEmployeesTable from './LatestEmployeesTable';
import LatestDepartmentsTable from './LatestDepartmentsTable';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
  infoCardIcon: {
    fontSize: 50,
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <InfoCard label="Total Employees" content={4000} icon={<Group className={classes.infoCardIcon} color="primary" />} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard label="Total Departments" content={40} icon={<Business className={classes.infoCardIcon} color="primary" />} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard label="Last Employee Added" content="Diana" icon={<Person className={classes.infoCardIcon} color="primary" />} />
        </Grid>
        <Grid item xs={3}>
          <InfoCard label="Last Department Added" content="Human Resources" icon={<Business className={classes.infoCardIcon} color="primary" />} />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <LatestEmployeesTable />
        </Grid>
        <Grid item xs={12}>
          <LatestDepartmentsTable />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;
