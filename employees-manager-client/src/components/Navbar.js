import React from 'react';
import { AppBar, Button, Container, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Home, Group, Business, Palette } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Employees Manager
        </Typography>
          <Button component={Link} to="/" className={classes.button} color="inherit" startIcon={<Home />}>Home</Button>
          <Button component={Link} to="/employees" className={classes.button} color="inherit" startIcon={<Group />}>Employees</Button>
          <Button component={Link} to="/departments" className={classes.button} color="inherit" startIcon={<Business />}>Departments</Button>
          <Button component={Link} to="/theme" className={classes.button} color="inherit" startIcon={<Palette />}>Theme</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar;
