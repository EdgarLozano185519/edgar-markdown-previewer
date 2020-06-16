import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownPreviewer from './MarkdownPreviewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
