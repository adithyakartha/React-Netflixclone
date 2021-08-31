import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar.js';
import RowPost from './Components/RowPost/RowPost';
import { useState } from 'react';
import { action, documentaries, romance, trending } from './urls';
import { orginals } from './urls';
function App() {
  const [state,setState]=useState([])
  return (    
    <div>
      <NavBar/>
      <Banner/>
      <RowPost title="Netflix Orginals" url={orginals}    />
      <RowPost  title="Action" isSmall url={action} />
      <RowPost  title="Romance" isSmall url={romance} />
      <RowPost  title="Romance" isSmall url={documentaries} />
      <RowPost  title="Romance" isSmall url={trending} />
    </div>
  );
}

export default App;
