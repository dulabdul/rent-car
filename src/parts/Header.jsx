import { Navbar } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import logo from '../assets/images/design/logo.svg';
import Button from '../components/Button';

export default function Header({
  howItWorkRef,
  whyChoseUsRef,
  popularRentRef,
  testimonialRef,
}) {
  const [scrolledNav, setScrolledNav] = useState(null);
  const handlerScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop - 50,
      behavior: 'smooth',
    });
  };
  const listenScrollEvent = () => {
    window.scrollY > 50 ? setScrolledNav('scrolled') : setScrolledNav('');
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <header className={`w-full z-50 fixed ${scrolledNav}`}>
      <div className='container mx-auto'>
        <Navbar
          fluid={true}
          rounded={true}>
          <Navbar.Brand
            href='/'
            className=''>
            <img
              src={logo}
              className='h-12'
              alt='Flowbite Logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='px-5 py-1 ul'>
            <li>
              <Button
                type='button'
                onClick={() => {
                  handlerScroll(howItWorkRef.current);
                }}
                className='text-primary text-base font-semibold md:font-normal hover:text-secondary transition-all active'>
                How it works
              </Button>
            </li>
            <li>
              <Button
                type='button'
                onClick={() => {
                  handlerScroll(whyChoseUsRef.current);
                }}
                className='text-primary text-base font-semibold md:font-normal hover:text-secondary transition-all'>
                Why choose us
              </Button>
            </li>
            <li>
              <Button
                type='button'
                onClick={() => {
                  handlerScroll(popularRentRef.current);
                }}
                className='text-primary text-base font-semibold md:font-normal hover:text-secondary transition-all'>
                Catch our deals
              </Button>
            </li>
            <li>
              <Button
                type='button'
                onClick={() => {
                  handlerScroll(testimonialRef.current);
                }}
                className='text-primary text-base font-semibold md:font-normal hover:text-secondary transition-all'>
                Testimonials
              </Button>
            </li>
            <div className='border-r border-[#BEBEBE] '></div>
            <li>
              <Button
                type='link'
                href=''
                className='text-primary text-base font-semibold md:font-normal hover:text-secondary transition-all'>
                Login
              </Button>
            </li>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
