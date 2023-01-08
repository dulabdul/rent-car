import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';

import React, { useEffect } from 'react';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          exatch
          path='/'
          element={<LandingPages />}
        />
      </Routes>
    </>
  );
}
