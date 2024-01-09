import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home/Home';
import Zagreb from './croatia/Zagreb';
import Marbella from './spain/Marbella';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zagreb" element={<Zagreb />} />
        <Route path="/marbella" element={<Marbella />} />
      </Routes>
    </Router>
  );
}

export default App;
