import React from 'react';

import calender from '../assets/images/design/icons/calendar-tick.svg';
import car from '../assets/images/design/icons/car.svg';
import location from '../assets/images/design/icons/location.svg';
export default function HowItWork({ howItWorkRef }) {
  return (
    <section
      ref={howItWorkRef}
      className='w-full overflow-hidden flex items-center justify-center py-16 md:py-8'>
      <div className='container mx-auto w-full overflow-hidden'>
        <div className='text-center'>
          <h1 className='text-base mb-4 text-tersier uppercase'>How it work</h1>
          <h2 className='font-semibold text-2xl md:text-3xl text-primary'>
            Rent your desired car with following 3 working steps
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 items-center justify-center w-full overflow-hidden py-8'>
          <div className='flex flex-col w-full h-full items-center justify-center p-4'>
            <div className='flex items-center shadow-lg bg-white rounded-3xl w-[129px] h-[129px] justify-center'>
              <img
                src={location}
                alt='Location'
                className='object-cover object-center'
              />
            </div>
            <h4 className='font-semibold my-3 text-primary capitalize text-xl'>
              pick your location
            </h4>
            <p className='text-tersier font-normal capitalize text-base text-center'>
              Choose your location and find your best car.
            </p>
          </div>
          <hr className='border-[1px] border-slate-500 border-dashed hidden md:block' />
          <div className='flex flex-col w-full h-full items-center justify-center p-4'>
            <div className='flex items-center shadow-lg bg-gradient-to-t from-[#35c2ba] to-[#8df5f0] rounded-3xl w-[129px] h-[129px] justify-center'>
              <img
                src={calender}
                alt='Calender'
                className='object-cover object-center'
              />
            </div>
            <h4 className='font-semibold my-3 text-primary capitalize text-xl'>
              pick-up date/time
            </h4>
            <p className='text-tersier font-normal capitalize text-base text-center'>
              Select your pick up date and time to book your car.
            </p>
          </div>
          <hr className='border-[1px] border-slate-500 border-dashed hidden md:block' />
          <div className='flex flex-col w-full h-full items-center justify-center p-4'>
            <div className='flex items-center shadow-lg bg-white rounded-3xl w-[129px] h-[129px] justify-center'>
              <img
                src={car}
                alt='Car'
                className='object-cover object-center'
              />
            </div>
            <h4 className='font-semibold text-center my-3 text-primary capitalize text-xl'>
              Book your desired car
            </h4>
            <p className='text-tersier font-normal capitalize text-base text-center'>
              We will deliver it directly to you.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
