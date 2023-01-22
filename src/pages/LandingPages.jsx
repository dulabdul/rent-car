import React, { useEffect, useRef } from 'react';
import Client from '../parts/Client';
import Footer from '../parts/Footer';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import HowItWork from '../parts/HowItWork';
import PopularRent from '../parts/PopularRent';
import Testimonial from '../parts/Testimonial';
import WhyChoseUs from '../parts/WhyChoseUs';

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
