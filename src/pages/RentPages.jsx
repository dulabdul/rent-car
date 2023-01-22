import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../helpers/fetch';
import useAsync from '../helpers/hooks/useAsync';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Rent from '../parts/Rent';
import { SkeletonLoadingRent } from '../parts/SkeletonLoading';

export default function RentPages() {
  const { idp } = useParams();
  const { run, isLoading, status, error, data } = useAsync();
  useEffect(() => {
    run(fetchData({ url: `/api/v1/products/${idp}` }));
  }, [idp, run]);
  console.log(idp);
  return (
    <>
      <Header />
      {isLoading ? <SkeletonLoadingRent /> : <Rent data={data} />}

      <Footer />
    </>
  );
}
