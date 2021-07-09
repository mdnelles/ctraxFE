import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { VERSION_NUMBER } from '../../constants/variables';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#aaa',
    zIndex: 1300,
    position: 'fixed',
    left: 10,
    bottom: 5
  }
}));

const VersionWidget = (props) => {
  const classes = useStyles();

  return (
    <Typography component="span" className={classes.root}>
      {VERSION_NUMBER}
    </Typography>
  );
};

export default VersionWidget;
