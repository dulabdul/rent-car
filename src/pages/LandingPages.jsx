import React, { useEffect, useRef } from 'react';
import Client from '../parts/Client';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import HowItWork from '../parts/HowItWork';
import PopularRent from '../parts/PopularRent';
import Testimonial from '../parts/Testimonial';
import WhyChoseUs from '../parts/WhyChoseUs';
import { Helmet } from 'react-helmet';
export default function LandingPages() {
  const howItWorkRef = useRef(null);
  const whyChoseUsRef = useRef(null);
  const popularRentRef = useRef(null);
  const testimonialRef = useRef(null);
  useEffect(() => {
    document.title = 'HomePage';
  }, []);
  return (
    <>
      <Helmet>
        <link
          rel='canonical'
          href='https://rent-car-theta.vercel.app/'
        />
        <meta
          name='author'
          content='Abdul Rahman'
        />
        <meta
          name='description'
          content='Rent Car Website'
        />
        <meta
          name='keywords'
          content='Rent Car, Car, Rental Car'
        />
        <meta
          property='og:image'
          content='https://imgcdn.oto.com/medium/gallery/exterior/1/393/audi-q5-15113.jpg'
        />
      </Helmet>
      <Header
        howItWorkRef={howItWorkRef}
        whyChoseUsRef={whyChoseUsRef}
        popularRentRef={popularRentRef}
        testimonialRef={testimonialRef}
      />

      <Hero />
      <Client />
      <HowItWork howItWorkRef={howItWorkRef} />
      <WhyChoseUs whyChoseUsRef={whyChoseUsRef} />
      <PopularRent popularRentRef={popularRentRef} />
      <Testimonial testimonialRef={testimonialRef} />
      <Footer />
    </>
  );
}
