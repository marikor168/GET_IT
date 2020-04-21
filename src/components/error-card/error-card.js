import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@material-ui/core';

import './error-card.css';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    marginBottom: '10px',
    width: '90%',
    height: '107px',
  },
  title: {
    fontSize: 15,
    overflow: 'hidden',
  },
  prior: {
    marginBottom: 12,
    fontSize: 13,
  },
  user: {
    fontSize: 13,
  }
});

const ErrorCard = ( {title, user, priority} ) => {
  const classes = useStyles();
  return (
    // <Card className={classes.root} variant="outlined">
    //   <CardContent 
    //   // className="error__card"
    //   >

    //     <Typography className={classes.title}>
    //       {title}
    //     </Typography>
    //     <Typography 
    //     className={classes.prior} 
    //     color="textSecondary">
    //       {priority}
    //     </Typography>
    //     <Typography 
    //     className={classes.user}
    //     component="p">
    //       {user}
    //     </Typography>
    //   </CardContent>
    // </Card>
    <div className="error__card">
      <div className="card__title">{title}</div>
      <div className="card__priority">{priority}</div>
      <div className="card__user">{user}</div>
    </div>
  );
};

export default ErrorCard;