import React from 'react';
import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const InfoCard = ({ label, content, icon }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={2}>
      <div>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>{label}</Typography>
          <Typography className={classes.content} variant="h5" component="h2">
            {
              //Only show 11 characters of content
              content.length > 11 ? content.substr(0, 11) + "..." : content
            }
          </Typography>
        </CardContent>
      </div>
      <div>
        {icon}
      </div>
    </Card>
  )
}

export default InfoCard;
