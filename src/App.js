import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu/Menu';
import CashRegister from './CashRegister/CashRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Menu}/>
          <Route path='/firstLevel' component={CashRegister}/>
        </Switch>
        <Footer/>
      </div>
   </Router> 
  );
}

export default App;
