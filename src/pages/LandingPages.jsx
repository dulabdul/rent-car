import React from 'react';
import Client from '../parts/Client';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import HowItWork from '../parts/HowItWork';
import PopularRent from '../parts/PopularRent';
import Testimonial from '../parts/Testimonial';
import WhyChoseUs from '../parts/WhyChoseUs';

export default function LandingPages() {
  return (
    <>
      <Header />
      <Hero />
      <Client />
      <HowItWork />
      <WhyChoseUs />
      <PopularRent />
      <Testimonial />
    </>
  );
}
