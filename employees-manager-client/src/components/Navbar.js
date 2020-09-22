import React from 'react';
import { AppBar, Button, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Home, Group, Business } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Employees Manager
        </Typography>
          <Button className={classes.button} color="inherit" startIcon={<Home />}>Home</Button>
          <Button className={classes.button} color="inherit" startIcon={<Group />}>Employees</Button>
          <Button className={classes.button} color="inherit" startIcon={<Business />}>Departments</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
