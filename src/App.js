import React from 'react';
import Users from './components/user/Users';
import './App.css';
import Navbar from './components/partial/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserItem from './components/user/UserItem';
function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    <div class="container mt-2">
    <Switch>
      <Route exact  path="/users" component={Users}/>
      <Route exact  path="/users/:login" component={UserItem}/>
      <Route exact  component={Users}/>
    </Switch>
      
      </div>
    </div>
    </Router>
  );
}

export default App;
