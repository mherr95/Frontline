import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Body from './components/Body'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' exact element={<Body/>}  />
      </Routes>
    </Router>
    </>
  );
}

export default App;
