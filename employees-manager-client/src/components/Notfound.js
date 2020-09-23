import React from 'react';
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    flexFlow: 'column',
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h2" component="h1">
        <Typography variant="h2" component="span" color="secondary">404</Typography> error page not found.
      </Typography>
      <Button component={Link} to="/" className={classes.button}>Go back</Button>
    </Container>
  );
}

export default NotFound;