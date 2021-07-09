import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RedirectContainer from './components/layout/RedirectContainer';
import { renderRoutesWithSwitch, routes } from './constants/routes';

const App = () => (
  <Router>
    <RedirectContainer>{renderRoutesWithSwitch(routes)}</RedirectContainer>
  </Router>
);

export default App;
