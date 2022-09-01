import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Landing from '././Pages/Landing'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/' exact element={<Landing/>} />
        {/* <Route path ='/about' element ={<Info />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
