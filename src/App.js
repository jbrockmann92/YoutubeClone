import React from 'react';
import './App.css';
import axios from 'axios';
import searchBar from './searchBar'

function App() {

  return (
    <div>
      <React.StrictMode>
        <searchBar />
      </React.StrictMode>
    </div>
  );
}

export default App;
