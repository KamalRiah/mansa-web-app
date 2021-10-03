import AppLayoutConnected from 'AppLayoutConnected';
import AppLayoutDisconnected from 'AppLayoutDisconnected';
import ChangePassword from 'pages/ChangePassword';
import CompletedRequests from 'pages/CompletedRequests';
import Contribute from 'pages/Contribute';
import Login from 'pages/Login';
import ManageUsers from 'pages/ManageUsers';
import NewIncomingRequests from 'pages/NewIncomingRequests';
import OpenRequests from 'pages/OpenRequests';
import Profile from 'pages/Profile';
import Verify from 'pages/Verify';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

export default function App() {
  const user = useSelector((state) => state.user);

  return (
    <Router>
      {user.isConnected ? (
        <AppLayoutConnected>
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            {user.data.role === 'adminContributor' && (
              <Route exact path="/contribute">
                <Contribute />
              </Route>
            )}
            {user.data.role === 'adminVerifier' && (
              <Route exact path="/contribute">
                <Verify />
              </Route>
            )}
            <Route exact path="/new-incoming-requests">
              <NewIncomingRequests />
            </Route>
            <Route exact path="/completed-requests">
              <CompletedRequests />
            </Route>
            <Route exact path="/open-requests">
              <OpenRequests />
            </Route>
            <Route exact path="/manage-users">
              <ManageUsers />
            </Route>
            <Route exact path="/change-password">
              <ChangePassword />
            </Route>
          </Switch>
        </AppLayoutConnected>
      ) : (
        <AppLayoutDisconnected>
          <Route exact path="/">
            <Login />
          </Route>
        </AppLayoutDisconnected>
      )}
    </Router>
  );
}
