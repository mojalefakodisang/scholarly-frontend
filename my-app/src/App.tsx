import React from 'react';
import logo from './favicon.png';
import './App.css';

function App() {
  const link: string = "https://github.com/scholarlySA/scholarly-blog";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Scholarly South Africa website coming soon.
        </p>
        <small>For more information, visit our<a href={link}> GitHub repository</a>
        </small>
       </header>
    </div>
  );
}

export default App;
