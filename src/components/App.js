import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import PrivateRoute from '../containers/PrivateRoute';
import LoginPage from '../components/Login';
import RegisterPage from '../components/Register';
import DashboardPage from '../components/Dashboard';

const App = () => (
  <div style={{
    display : "flex",
    alignItems: "center",
    margin : "0 auto",
    flexDirection : "column"
  }}>
    <h1 style={{
      textTransform : "uppercase",
      fontFamily : "Lato",
      color : '#ee91bc',
      fontSize : "25px"
    }}>React-Redux TODO List</h1>
      <BrowserRouter>
        {/* <div> */}
          <Switch>
            <Route path='/' exact={true} component={LoginPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path='/dashboard' component={DashboardPage} />
          </Switch>
        {/* </div> */}
      </BrowserRouter>
  </div>
);

export default App;
