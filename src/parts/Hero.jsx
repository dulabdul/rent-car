import React from 'react';
import Button from '../components/Button';
import heroCar from '../assets/images/design/hero-car.png';
import gPlay from '../assets/images/design/icons/gplay.svg';

import { AiFillApple } from 'react-icons/ai';
export default function Hero() {
  return (
    <section className='flex flex-col items-center hero'>
      <div className='w-full items-center grid grid-cols-1 md:grid-cols-2 justify-center absolute inset-0 z-20 min-h-[90vh] md:min-h-auto md:relative'>
        <div className='mx-auto w-[510px] overflow-hidden'>
          <div className='relative w-full flex flex-col gap-y-4'>
            <h1 className='font-medium text-primary text-5xl'>
              Rent your favorite <br /> car in{' '}
              <span className='text-secondary border-b'>Easy</span> steps.
            </h1>
            <p className='text-base text-[#929395]'>
              Get a car wherever and whenever you need it with your <br /> iOS
              or Android device.
            </p>
            <div className='flex items-center gap-x-4'>
              <Button
                isPrimary
                isRounded
                hasShadow
                isFlex
                isWidthAuto
                className='button items-center'>
                <AiFillApple className='text-4xl mr-2' />
                <div>
                  <span className='text-[10px] font-light text-center'>
                    Download on the
                  </span>
                  <h5 className='text-center font-medium text-lg'>App Store</h5>
                </div>
              </Button>
              <Button
                isPrimary
                isRounded
                hasShadow
                isFlex
                isWidthAuto
                className='button items-center'>
                <img
                  src={gPlay}
                  alt='Google Play'
                  className='w-8 h-8'
                />
                <div>
                  <span className='uppercase   text-[10px] font-light text-center'>
                    Get in on
                  </span>
                  <h5 className='text-center font-medium text-lg'>
                    Google Play
                  </h5>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className='w-full overflow-hidden md:relative'>
          <div className='relative md:min-h-auto'>
            <img
              src={heroCar}
              alt='Hero Car'
              className='absolute w-full h-full object-cover object-center md:relative'
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto overflow-hidden absolute bottom-0 top-[85%]'>
        <div className='w-full px-8 py-4 items-center justify-center grid grid-cols-3 shadow-lg rounded-lg bg-white'>
          <div className='border-r ml-4 border-slate-300'>
            <h6 className='text-sm font-semibold text-primary uppercase'>
              Location
            </h6>
            <p className='text-sm text-slate-300 font-normal'>
              Search your location
            </p>
          </div>
          <div className='border-r ml-4 border-slate-300'>
            <h6 className='text-sm font-semibold text-primary uppercase'>
              Pickup Date
            </h6>
            <p className='text-sm text-slate-300 font-normal'>
              Tue 15 January, 10:00
            </p>
          </div>
          <div className='ml-4 border-slate-300 flex justify-between items-center'>
            <div>
              <h6 className='text-sm font-semibold text-primary uppercase'>
                Return Date
              </h6>
              <p className='text-sm text-slate-300 font-normal'>
                Thu 20 January, 12:00
              </p>
            </div>
            <Button
              isSecondary
              isRounded
              className='button'>
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
