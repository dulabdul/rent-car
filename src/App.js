import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import React from 'react';
import NotFoundPages from './pages/NotFoundPages';

export default function App() {
  return (
    <>
      <Routes>
        <Route
          exatch
          path='/'
          element={<LandingPages />}
        />
        <Route
          exacth
          path='*'
          element={<NotFoundPages />}
        />
      </Routes>
    </>
  );
}
