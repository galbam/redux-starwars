import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import Store from "./Store";
import StartWars from "./components/StarWars";
import Weather from "./components/Weather";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <Provider store = {Store}>
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route path="/" exact component={StartWars} />
            <Route path="/weather" component={Weather} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;