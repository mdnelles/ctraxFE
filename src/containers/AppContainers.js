import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { APPBAR_HEIGHT, DRAWER_WIDTH, DRAWER_WIDTH_TOGGLED } from '../constants/layout';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 25,
    paddingBottom: 30,
    paddingLeft: 'max(2vw, 12px)',
    paddingRight: 'max(2vw, 12px)',
    marginTop: APPBAR_HEIGHT,
    marginLeft: DRAWER_WIDTH_TOGGLED,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  rootShift: {
    marginLeft: DRAWER_WIDTH,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  content: {}
}));

const AppContainer = (props) => {
  const { open } = props;
  const classes = useStyles();

  return (
    <main className={clsx(classes.root, { [classes.rootShift]: open })}>
      <div className={classes.content}>{props.children}</div>
    </main>
  );
};

export default AppContainer;
