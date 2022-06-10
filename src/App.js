import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Destinations from './components/pages/Destinations';
import SignUp from './components/pages/SignUp';
import Shop from './components/pages/Shop';



function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/destinations' element={<Destinations />}></Route>
    <Route path='/shop' element={<Shop />}></Route>
    <Route path='/sign-up' element={<SignUp />}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
