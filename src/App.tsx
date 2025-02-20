import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Notes from './components/Notes';
import About from './components/About';

function App() { 

  return (
    <BrowserRouter>
      <header>
        <h1>Notes</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' Component={Notes}></Route>
          <Route path='/about' Component={About}></Route>   
        </Routes>     
      </main>
    </BrowserRouter>
  );
}

export default App;
