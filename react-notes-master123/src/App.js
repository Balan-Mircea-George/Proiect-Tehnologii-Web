import React, {useState} from 'react';
import "./App.css"
import Login from './authentification_components/Login'
import useToken from './useToken'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Notes from './pages/Notes';
import EditNote from './pages/EditNote';
import CreateNote from './pages/CreateNote';

export default function BasicExample() {

  const { token, setToken } = useToken();

   if (!token) {
     return <Login setToken={setToken}/>
   }
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/notes/:id/edit" component={EditNote} />
          <Route exact path="/notes/create" component={CreateNote} />
        </Switch>
      </>
    </Router>
  );
}
