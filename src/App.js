import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar.js';
import RowPost from './Components/RowPost/RowPost';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [state,setState]=useState([])
  return (    
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Orginals"    />
      <RowPost  title="Action" isSmall  />
    </div>
  );
}

export default App;
