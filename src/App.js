import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import ResumeBuilder from './ResumeBuilder';
import Homepage from './Homepage';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
          
          <Route exact path="/Resume" element={<ResumeBuilder/>} />
          
        
        
      </Routes>

      <div>
    <NavLink to="/Resume" >Start Building</NavLink>
    </div>
    </BrowserRouter>
  );
};

export default App;
