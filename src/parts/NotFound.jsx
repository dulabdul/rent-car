import React from 'react';
import notFound from '../assets/images/design/notfound.jpg';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <section className='container mx-auto py-24 px-4'>
      <div className='grid grid-cols-1 justify-center items-center'>
        <div className='mx-auto flex justify-center'>
          <img
            className='w-full h-full object-center object-cover mx-auto'
            src={notFound}
            alt=''
          />
        </div>
        <div className='grid grid-cols-1 text-center'>
          <h1 className='text-2xl font-semibold py-4 md:text-4xl'>
            Sorry, your destination not found
          </h1>

          <div className='flex justify-center'>
            <Button
              type='link'
              href='/'
              hasShadow
              isSecondary
              isRoundedFull
              isFlex
              className='w-[250px] justify-center items-center button cursor-pointer'>
              Back To Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
