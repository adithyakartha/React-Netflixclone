import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar.js';
import RowPost from './Components/RowPost/RowPost';
import { useState } from 'react';
import { action, documentaries, romance, trending } from './urls';
import { orginals } from './urls';
import About from './Container/About';
import Profile from './Container/Profile';
import {Route,Link,useHistory} from 'react-router-dom';
import { AppContext } from './Container/Appcontext';
import { Firebase } from './firebase/config';
function App() {

  return (
    <div>
     <button onClick={()=>{
Firebase.firestore().collection('products').add({
  'name':'mi',
  'price':200,
})
     }}>clickey</button>
    </div>
  );
}

export default App;
