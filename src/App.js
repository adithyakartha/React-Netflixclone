import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar.js';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div >
      <NavBar/>
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
