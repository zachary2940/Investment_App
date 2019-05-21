import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';
import MyNavbar from './NavBar';
import Toggle from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="navbar">
          <MyNavbar/>
        </header>
        <body className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle/>       
        </body>
      </div>
    );
  }
}



export default App;
