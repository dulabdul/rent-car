import React from 'react';
import {
  BsTelephoneFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import logoWhite from '../assets/images/design/logo-white.svg';
import Button from '../components/Button';

export default function Footer() {
  const arrMedsos = [
    {
      icons: <BsInstagram />,
      href: 'http://instragam.com/dul.abdul',
    },
    {
      icons: <BsLinkedin />,
      href: 'https://www.linkedin.com/in/abdul-rahman-2737131a1',
    },
    {
      icons: <BsGithub />,
      href: 'https://github.com/dulabdul',
    },
    {
      icons: <MdEmail />,
      href: 'dulabdol1331@gmail.com',
    },
  ];
  return (
    <section className='w-full overflow-hidden bg-[#010101] py-12 md:py-0 h-[790px] md:h-[530px] flex flex-col justify-end'>
      <div className='w-full container mx-auto overflow-hidden text-white'>
        <div className='w-full flex flex-col flex-wrap justify-center md:grid md:grid-cols-4 items-center'>
          <div className='w-[170px] h-[170px] md:w-[200px] md:h-[200px]'>
            <img
              src={logoWhite}
              alt='Logo'
              className='object-cover object-center'
            />
          </div>
          <div className='w-full mb-4 md:mb-0'>
            <p className='text-tersier flex justify-center font-light text-sm'>
              DKI Jakarta, Jakarta Pusat, Kemayoran
            </p>
          </div>
          <div className='flex items-center text-sm justify-center'>
            <BsTelephoneFill /> <span className='ml-1'>+6289675293838</span>
          </div>
          <div className='flex flex-col w-full'>
            <h6 className='text-white font-normal text-center my-4 md:my-0 md:text-end mb-2'>
              Follow Us
            </h6>
            <div className='w-full flex gap-x-4 justify-center mt-4 md:justify-end '>
              {arrMedsos.map((items, index) => {
                return (
                  <Button
                    key={index}
                    type='link'
                    isExternal
                    href={items.href}
                    className='min-w-[44px] flex items-center justify-center min-h-[44px] border border-[#505865] rounded-full cursor-pointer transition-all ease-in-out hover:text-white hover:bg-secondary '>
                    <span className='text-2xl md:text-xl'>{items.icons}</span>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-4 mt-8 border-[#505865]' />
      <div className='container mx-auto w-full'>
        <p className='text-white text-center font-light text-base italic pt-4 capitalize'>
          Copyright 2022 &copy; Abdul Rahman. All rights reversed
        </p>
        <p className='text-tersier text-center font-light text-sm capitalize p-2 md:pt-2 md:pb-4'>
          Design by{' '}
          <a
            className='hover:underline hover:text-blue-500'
            href='https://www.figma.com/file/T4TpkUspVRN9SNCZWtKEy2/CarMania---Landing-Page-(Community)?t=D8XhCIF9WJGYoPHu-6'>
            Figma Community
          </a>
        </p>
      </div>
    </section>
  );
}
