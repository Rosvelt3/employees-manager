import React, { useState } from 'react';
import { AppBar, Button, Container, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Home, Group, Business, Palette, Menu } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  buttons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const menuOptions = [
  {
    text: "Home",
    link: "/",
    icon: <Home />,
  },
  {
    text: "Employees",
    link: "/employees",
    icon: <Group />,
  },
  {
    text: "Departments",
    link: "/departments",
    icon: <Business />,
  },
  {
    text: "Theme",
    link: "/theme",
    icon: <Palette />,
  }
]

const Navbar = () => {
  const classes = useStyles();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Employees Manager
          </Typography>
          <div className={classes.buttons}>
            {menuOptions.map(menuOption => (
              <Button key={menuOption.text} component={Link} to={menuOption.link} className={classes.button} color="inherit" startIcon={menuOption.icon}>{menuOption.text}</Button>
            ))}
          </div>
          <IconButton edge="end" onClick={() => setShowDrawer(true)} className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="left" open={showDrawer} onClose={() => setShowDrawer(false)} >
        <List>
          {menuOptions.map(menuOption => (
            <ListItem key={menuOption.text} component={Link} to={menuOption.link} onClick={() => setShowDrawer(false)} button>
              <ListItemIcon>{menuOption.icon}</ListItemIcon>
              <ListItemText primary={menuOption.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Navbar;
