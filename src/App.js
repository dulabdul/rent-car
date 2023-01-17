import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
import React from 'react';
import NotFoundPages from './pages/NotFoundPages';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel='canonical'
          href='https://rent-car-theta.vercel.app/'
        />
        <meta
          key='author'
          name='author'
          content='Abdul Rahman'
        />
        <meta
          key='description'
          name='description'
          content='Rent Car Website'
        />
        <meta
          name='keywords'
          key='keywords'
          content='Rent Car, Car, Rental Car'
        />
        <meta
          property='og:image'
          key='og:image'
          content='https://source.unsplash.com/random/300x200'
        />
        <meta
          property='og:title'
          key='og:title'
          content='Rent Car Web'
        />
        <meta
          property='og:url'
          content='https://rent-car-theta.vercel.app/'
        />
        <meta
          property='og:description'
          key='og:description'
          content='Website to rent car'
        />
        <meta
          key='og:type'
          property='og:type'
          content='website'
        />
      </Helmet>
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
