import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
        <Router>
          <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/post">
            <Home></Home>
          </Route>
          <Route path="/posts/:postDetails">
            <PostDetails></PostDetails>
          </Route>
          <Route path="/postDetails">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>
     
    </div>
  );
}

export default App;
