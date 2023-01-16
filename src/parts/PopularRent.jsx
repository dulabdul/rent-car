import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { RiTempColdLine } from 'react-icons/ri';
import { GiCarDoor } from 'react-icons/gi';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

import car1 from '../assets/images/design/car-1.png';
import car2 from '../assets/images/design/car-2.png';
import car3 from '../assets/images/design/car-3.png';
import car4 from '../assets/images/design/car-4.png';
import Button from '../components/Button';

export default function PopularRent() {
  const arrFeatur = [
    {
      id: 1,
      src: car1,
      alt: 'Car Mazda',
      review: 4.8,
      name: 'Tata Zest - XE Petrol',
      price: 200,
      fitur: [
        {
          icons: <FaUserAlt />,
          text: '4 passengers',
        },
        {
          icons: <TbManualGearbox />,
          text: 'Manual',
        },
        {
          icons: <RiTempColdLine />,
          text: 'Air Conditioner',
        },
        {
          icons: <GiCarDoor />,
          text: '4 door',
        },
      ],
    },
    {
      id: 2,
      src: car2,
      alt: 'Car Mazda',
      review: 4.2,
      name: 'i20 2018 Model - Noida, India',
      price: 400,
      fitur: [
        {
          icons: <FaUserAlt />,
          text: '4 passengers',
        },
        {
          icons: <TbManualGearbox />,
          text: 'Manual',
        },
        {
          icons: <RiTempColdLine />,
          text: 'Air Conditioner',
        },
        {
          icons: <GiCarDoor />,
          text: '4 door',
        },
      ],
    },
    {
      id: 3,
      src: car3,
      alt: 'Car Mazda',
      review: 5.0,
      name: 'Suzuki Grand Vitara T',
      price: 250,
      fitur: [
        {
          icons: <FaUserAlt />,
          text: '4 passengers',
        },
        {
          icons: <TbManualGearbox />,
          text: 'Manual',
        },
        {
          icons: <RiTempColdLine />,
          text: 'Air Conditioner',
        },
        {
          icons: <GiCarDoor />,
          text: '4 door',
        },
      ],
    },
    {
      id: 4,
      src: car4,
      alt: 'Car Mazda',
      review: 4.9,
      name: 'Hyundai Creta 2019-20',
      price: 200,
      fitur: [
        {
          icons: <FaUserAlt />,
          text: '4 passengers',
        },
        {
          icons: <TbManualGearbox />,
          text: 'Manual',
        },
        {
          icons: <RiTempColdLine />,
          text: 'Air Conditioner',
        },
        {
          icons: <GiCarDoor />,
          text: '4 door',
        },
      ],
    },
  ];
  return (
    <section className='w-full py-36 flex overflow-hidden items-center justify-center'>
      <div className='container mx-auto'>
        <h1 className='text-center mb-3 uppercase text-base text-tersier'>
          POpular rental deals
        </h1>
        <h2 className='capitalize text-primary font-semibold text-center text-3xl'>
          Most popular cars rental deals
        </h2>
        <div className='w-full py-12 grid grid-cols-1 md:grid-cols-4 items-center justify-center overflow-hidden'>
          {arrFeatur.map((items, index) => {
            return (
              <div
                key={items.id}
                className='bg-white border overflow-hidden p-2 shadow-lg rounded-xl w-[272px] h-[385px]'>
                <div className='h-[165px] flex items-center justify-center overflow-hidden bg-[#F7F7FB] rounded-xl'>
                  <img
                    src={items.src}
                    alt={items.alt}
                  />
                </div>
                <div className='ml-1 mt-3'>
                  <div className='flex items-center'>
                    <AiTwotoneStar className='text-yellow-300 text-2xl' />
                    <p className='text-base font-semibold text-primary ml-1'>
                      {items.review}
                    </p>
                    <span className='text-sm font-light text-tersier'>
                      {'[100+ review]'}
                    </span>
                  </div>
                  <h4 className='font-semibold text-primary mt-4'>
                    {items.name}
                  </h4>
                </div>
                <div className='w-full py-2 mx-2 grid grid-cols-2 justify-center overflow-hidden'>
                  {items.fitur.map((featur, index) => {
                    return (
                      <div
                        key={index}
                        className='flex my-2 text-tersier'>
                        <p className='text-md'>{featur.icons}</p>
                        <span className='ml-1 text-sm text-tersier font-normal'>
                          {featur.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <hr />
                <div className='flex my-2 items-center justify-between'>
                  <p>
                    {'$'}
                    {items.price} /
                    <span className='text-tersier font-light text-sm'>day</span>
                  </p>
                  <Button
                    isFlex
                    className='items-center text-secondary hover:text-primary'
                    type='link'>
                    Rent Now{' '}
                    <BsArrowRight className='ml-2 font-semibold text-2xl' />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className='flex justify-center'>
          <Button
            isFlex
            isWidthAuto
            href='/'
            className='button items-center rounded-full border border-tersier hover:bg-secondary hover:border-secondary hover:text-white'>
            Show All Vehicle <BsArrowRight className='text-xl ml-2' />
          </Button>
        </div>
      </div>
    </section>
  );
}
