import React, { useEffect } from 'react';

import Header from '../parts/Header';

import Footer from '../parts/Footer';
import NotFound from '../parts/NotFound';
export default function NotFoundPages() {
  useEffect(() => {
    document.title = 'NotFoundPages | LuxSpace';
  }, []);
  return (
    <>
      <Header />
      <NotFound />
      <Footer />
    </>
  );
}
