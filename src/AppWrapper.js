import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import { useUserData } from './common/state/user/hooks';
import Layout from './components/layout/Layout';
import { isRoute } from './components/utilities/Functions';
import VersionWidget from './components/widgets/VersionWidget';
import {
  renderRoutesWithSwitch,
  routesAuthenticated,
} from './constants/routes';
import AppContainer from './containers/AppContainers';
import { useOpen, useWindowSize } from './utilities/hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative'
  }
}));

const getApi = (token) => {
  console.log(123);
};

export const AppWrapper = (props) => {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const location = useLocation();
  const { token } = useUserData();
  const drawerControls = useOpen(!windowSize.isMinimizeDrawer);







  return (
    <div>
      <div className={classes.root}>
        <Layout
          open={drawerControls.opened}
          handleDrawerOpen={drawerControls.open}
          handleDrawerClose={drawerControls.close}
        />

        <VersionWidget />

        <AppContainer open={drawerControls.opened}>
          <div id="main">{renderRoutesWithSwitch(routesAuthenticated)}</div>
        </AppContainer>
      </div>
    </div>
  );
};
