import React, { useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, Container, Grid, makeStyles, Radio, RadioGroup, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  colorContainer: {
    marginTop: 30,
  },
  colorItem: {
    textAlign: 'center',
    '& .MuiAvatar-root': {
      width: 80,
      height: 80,
      margin: 'auto',
    },
  }
}));

const colors = [
  {
    name: 'Default',
    value: '#0d47a1',
  },
  {
    name: 'Red',
    value: '#b71c1c',
  },
  {
    name: 'Purple',
    value: '#4a148c',
  },
  {
    name: 'Green',
    value: '#1b5e20',
  },
  {
    name: 'Yellow',
    value: '#f57f17',
  },
  {
    name: 'Grey',
    value: '#212121',
  }
]

const Theme = () => {
  const [selectedColor, setSelectedColor] = useState(localStorage.getItem("theme"));
  const classes = useStyles();
  const history = useHistory();

  const handleSave = () => {
    //Set selected theme and reload page to make changes take effect
    localStorage.setItem("theme", selectedColor);
    history.go("/theme");
  }

  return (
    <Container className={classes.root}>
      <Card elevation={2}>
        <CardContent>
          <Typography component="h5" variant="h5" color="primary">
            Select the main color used on the app
          </Typography>
          <RadioGroup row value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
            <Grid className={classes.colorContainer} container spacing={1}>
              {
                colors.map(color => (
                  <Grid item className={classes.colorItem} key={color.name} xs={12} sm={6} md={2}>
                    <Avatar style={{ backgroundColor: color.value, cursor: 'pointer' }} onClick={() => setSelectedColor(color.value)}> </Avatar>
                    <br />
                    <Radio style={{ color: color.value }} value={color.value} label={color.name} ></Radio>
                  </Grid>
                ))
              }
            </Grid>
          </RadioGroup>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
        </Button>
        </CardActions>
      </Card>
    </Container>
  )
}

export default Theme;