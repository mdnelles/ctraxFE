import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import LayoutHeader from './LayoutHeader';
import LayoutSidebar from './LayoutSidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative'
  }
}));

const Layout = (props) => {
  const { open } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LayoutHeader
        open={open}
        handleDrawerOpen={props.handleDrawerOpen}
        handleDrawerClose={props.handleDrawerClose}
      />

      <LayoutSidebar open={open} />
    </div>
  );
};

export default Layout;
