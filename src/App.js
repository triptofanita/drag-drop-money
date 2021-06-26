import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Menu from './Menu/Menu';
import CashRegister from './CashRegister/CashRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route path='/firstLevel' component={CashRegister}/>
        </Switch>
      </div>
   </Router> 
  );
}

export default App;
