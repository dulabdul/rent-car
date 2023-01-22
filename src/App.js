import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import React from 'react';
import NotFoundPages from './pages/NotFoundPages';

import RentPages from './pages/RentPages';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exacth
            path='/'
            element={<LandingPages />}
          />
          <Route
            exacth
            path='/rent/:idp'
            element={<RentPages />}
          />
          <Route
            exacth
            path='*'
            element={<NotFoundPages />}
          />
        </Routes>
      </Router>
    </>
  );
}
