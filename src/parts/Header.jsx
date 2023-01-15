import { Navbar } from 'flowbite-react';
import React from 'react';
import logo from '../assets/images/design/logo.svg';
import Button from '../components/Button';

export default function Header() {
  return (
    <header className='w-full z-50 absolute'>
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
          <Navbar.Collapse className='px-5 py-1'>
            <li>
              <Button
                type='link'
                href=''
                className='text-primary text-base font-normal hover:text-secondary transition-all active'>
                Why choose us
              </Button>
            </li>
            <li>
              <Button
                type='link'
                href=''
                className='text-primary text-base font-normal hover:text-secondary transition-all'>
                How it works
              </Button>
            </li>
            <li>
              <Button
                type='link'
                href=''
                className='text-primary text-base font-normal hover:text-secondary transition-all'>
                How to rent
              </Button>
            </li>
            <li>
              <Button
                type='link'
                href=''
                className='text-primary text-base font-normal hover:text-secondary transition-all'>
                Catch our deals
              </Button>
            </li>
            <div className='border-r border-[#BEBEBE] '></div>
            <li>
              <Button
                type='link'
                href=''
                className='text-primary text-base font-normal hover:text-secondary transition-all'>
                Login
              </Button>
            </li>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
