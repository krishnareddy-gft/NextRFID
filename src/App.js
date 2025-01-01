import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Welcome to React</h1>
      </header>
      <main>
        <p>This is a simple React application.</p>
      </main>
    </div>
  );
}

export default App;