import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { Person, Group, Business } from '@material-ui/icons';

import TotalCard from './TotalCard';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
  totalCardIcon: {
    fontSize: 50,
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={3}>
          <TotalCard label="Total Employees" quantity={4000} icon={<Group className={classes.totalCardIcon} color="primary" fontSize="large" />} />
        </Grid>
        <Grid item xs={3}>
          <TotalCard label="Last Employee Added" quantity={40} icon={<Person className={classes.totalCardIcon} color="primary" fontSize="large" />} />
        </Grid>
        <Grid item xs={3}>
          <TotalCard label="Total Departments" quantity={40} icon={<Business className={classes.totalCardIcon} color="primary" fontSize="large" />} />
        </Grid>
        <Grid item xs={3}>
          <TotalCard label="Last Department Added" quantity={40} icon={<Business className={classes.totalCardIcon} color="primary" fontSize="large" />} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home;
