import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./components/common.css"
import { NavBar } from './components/NavBar';
import { Banks } from './components/Banks';
import{Home}from "./components/Home"
import {Benef} from "./components/Benef"


function App() {
  return (
    <div className='main'>
      <h1>Bank App</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/banks" element={<Banks/>}/>
          <Route path="/benef" element={<Benef/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
