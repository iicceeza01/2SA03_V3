import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from ',/Content';
let x=10

class App extends Component {
  render() {
  return (
  <div className="App">
  Hello World {x}
  <Content name ="ice" num={x}/>
  </div>
  );
  }
 }
 export default App;

