import React from 'react';
import Button from '../components/Button';
import gPlay from '../assets/images/design/icons/gplay.svg';
import dash from '../assets/images/design/icons/dash.svg';
import heroImg from '../assets/images/design/hero-car.png';
import { AiFillApple } from 'react-icons/ai';
import { Fade } from 'react-reveal';

export default function Hero() {
  return (
    <section className='flex flex-col items-center hero'>
      <div className='w-full items-center grid grid-cols-1 md:grid-cols-2 justify-center inset-0 md:pb-0 z-20 min-h-[90vh] md:min-h-auto md:relative'>
        <div className='mx-auto w-full pt-16   md:pt-0 md:w-[510px] overflow-hidden px-4'>
          <Fade bottom>
            <div className='relative w-full flex flex-col gap-y-4'>
              <h1 className='font-medium text-primary text-3xl md:text-5xl'>
                Rent your favorite <br /> car in{' '}
                <span className='text-secondary'>
                  Easy <span className='text-primary'>steps.</span>
                  <img
                    src={dash}
                    alt='dashed'
                    className='absolute left-[30%] md:mt-2'
                  />
                </span>
              </h1>
              <p className='text-base text-[#929395] mt-3'>
                Get a car wherever and whenever you{' '}
                <br className='block md:hidden' /> need it with your{' '}
                <br className='hidden md:block' /> iOS or Android device.
              </p>
              <div className='hidden md:flex items-center gap-x-2 md:gap-x-4'>
                <Button
                  isPrimary
                  isRounded
                  hasShadow
                  isFlex
                  className='button items-center'>
                  <AiFillApple className='text-2xl mr-1 md:text-4xl md:mr-2' />
                  <div>
                    <span className='text-[10px] font-light text-center'>
                      Download on the
                    </span>
                    <h5 className='text-center font-medium text-base md:text-lg'>
                      App Store
                    </h5>
                  </div>
                </Button>
                <Button
                  isPrimary
                  isRounded
                  hasShadow
                  isFlex
                  className='button items-center'>
                  <img
                    src={gPlay}
                    alt='Google Play'
                    className='w-6 h-6 md:w-8 md:h-8'
                  />
                  <div>
                    <span className='uppercase text-[10px] font-light text-center'>
                      Get in on
                    </span>
                    <h5 className='text-center font-medium text-base md:text-lg'>
                      Google Play
                    </h5>
                  </div>
                </Button>
              </div>
            </div>
          </Fade>
        </div>
        <Fade top>
          <div className='w-full mb-28 mt-8 md:mt-0 md:mb-0 md:relative'>
            <div className='relative md:w-full h-auto md:min-h-auto'>
              <img
                src={heroImg}
                alt='Hero Car'
                className='w-[390px] md:w-full h-full object-cover object-center md:relative'
              />
            </div>

            <div className='flex justify-start md:hidden px-4 py-4 items-center gap-x-2 md:gap-x-4'>
              <Button
                isPrimary
                isRounded
                hasShadow
                isFlex
                className='button items-center'>
                <AiFillApple className='text-2xl mr-1 md:text-4xl md:mr-2' />
                <div>
                  <span className='text-[10px] font-light text-center'>
                    Download on the
                  </span>
                  <h5 className='text-center font-medium text-base md:text-lg'>
                    App Store
                  </h5>
                </div>
              </Button>
              <Button
                isPrimary
                isRounded
                hasShadow
                isFlex
                className='button items-center'>
                <img
                  src={gPlay}
                  alt='Google Play'
                  className='w-6 h-6 md:w-8 md:h-8'
                />
                <div>
                  <span className='uppercase text-[10px] font-light text-center'>
                    Get in on
                  </span>
                  <h5 className='text-center font-medium text-base md:text-lg'>
                    Google Play
                  </h5>
                </div>
              </Button>
            </div>
          </div>
        </Fade>
      </div>
      <Fade
        clear
        delay={600}>
        <div className='container mx-auto overflow-hidden absolute bottom-0 hidden md:block md:top-[85%]'>
          <div className='w-full py-2 md:px-8 md:py-4 items-center justify-center grid grid-cols-3 shadow-lg rounded-lg bg-white'>
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
      </Fade>
    </section>
  );
}
