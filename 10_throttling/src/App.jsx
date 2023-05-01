import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TnD from './pages/TnD';
import Company from './pages/Company';
import Lodash from './pages/Lodash';

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tnd" element={<TnD />} />
      <Route path="/company" element={<Company />} />
      <Route path="/lodash" element={<Lodash />} />
      <Route />
    </Routes>
  </BrowserRouter>;
}

export default App