import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>reAction</h1>
        <p>JustAnotherToDoList Built with React and Powered by Firebase</p>
        <Note />
      </div>
    );
  }
}

export default App;
