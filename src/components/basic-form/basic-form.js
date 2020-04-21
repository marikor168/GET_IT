import React from 'react';

import {
  Paper,
  Grid, 
  FormLabel,
  FormControlLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './basic-form.css';

const useStyles = makeStyles((theme) => ({
  loginBlock: {
    // minWidth: 300,
    // maxWidth: 500,
    width: 400,
    height: 250,
    // marginTop: 0,
  },
}));

const BasicForm = ( {classNamePaper, classNameLegend, value, children, onSubmit } ) => {
  const classes = useStyles();

  return (
    <div>
    <Paper elevation={22} className={ classNamePaper }>
      <h1 className="form__title">{value}</h1>
      <form onSubmit={ onSubmit } >
        {/* <Grid container 
        direction="column"
        alignItems="center"
        justify="space-around"
         className={classes.loginBlock}
         > */}

      { children }
        {/* </Grid>  */}
    </form>
    </Paper>
    </div>
    // <form onSubmit={ onSubmit }>
    //   <fieldset className={classNameFieldset}>
    //   <legend className={classNameLegend}>{value}</legend>
    //     { children }
    //   </fieldset>      
    // </form>
  );
};

export default BasicForm;