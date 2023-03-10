import React, { useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { RiTempColdLine } from 'react-icons/ri';
import { GiCarDoor } from 'react-icons/gi';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../components/Button';
import Star from '../components/Star';
import useAsync from '../helpers/hooks/useAsync';
import fetchData from '../helpers/fetch';
import { SkeletonLoadingPopularRent } from './SkeletonLoading';
import { Link } from 'react-router-dom';

export default function PopularRent({ popularRentRef }) {
  const { data, run, status, isLoading, error } = useAsync();
  useEffect(() => {
    run(fetchData({ url: '/api/v1/landing-pages/popularRent' }));
  }, [run]);
  console.log(data?.data);
  return (
    <section
      ref={popularRentRef}
      className='w-full py-36 px-2 flex overflow-hidden items-center justify-center'>
      <div className='container mx-auto'>
        <h1 className='text-center mb-3 uppercase text-base text-tersier'>
          POpular rental deals
        </h1>
        <h2 className='capitalize text-primary font-semibold text-center text-2xl md:text-3xl'>
          Most popular cars rental deals
        </h2>

        <div className='w-full py-12 flex flex-wrap gap-y-4 md:grid md:grid-cols-4 items-center justify-center overflow-hidden'>
          {isLoading
            ? Array(4)
                .fill()
                .map((_, index) => {
                  return <SkeletonLoadingPopularRent key={index + 10} />;
                })
            : data?.data?.map((items, index) => {
                return (
                  <div
                    key={items.id}
                    className='bg-white relative border overflow-hidden p-1 md:p-2 shadow-lg rounded-xl w-11/12 md:w-[272px] h-[385px]'>
                    <div className='group hover:scale-95 transition-all duration-300 h-[165px] flex items-center justify-center overflow-hidden bg-[#F7F7FB] rounded-xl'>
                      <img
                        src={items.src}
                        alt={items.alt}
                        className='object-center object-cover bg-no-repeat w-full group-hover:scale-110 duration-300 transition-all'
                      />
                    </div>
                    <div className='ml-1 mt-3 px-2 md:px-0'>
                      <div className='flex items-center'>
                        <Star
                          value={items.review}
                          width={24}
                          height={24}
                          spacing={2}></Star>
                        <span className='text-primary font-normal text-sm'>
                          {items.review}{' '}
                        </span>
                        <span className='text-[10px] font-light text-tersier'>
                          {'[100+ review]'}
                        </span>
                      </div>
                      <h4 className='font-semibold text-primary mt-4 px-2 md:px-0'>
                        {items.name}
                      </h4>
                    </div>
                    <div className='w-full py-2 mx-2 grid grid-cols-2 justify-center overflow-hidden px-2 md:px-0'>
                      {items.fitur.map((featur, index) => {
                        return (
                          <div
                            key={`index-${index}`}
                            className='flex my-2 text-tersier'>
                            <span className='ml-1 text-sm text-tersier font-normal'>
                              {featur.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <hr />
                    <div className='flex my-2 items-center justify-between px-2 md:px-0'>
                      <p>
                        {'$'}
                        {items.price} /
                        <span className='text-tersier font-light text-sm'>
                          day
                        </span>
                      </p>
                      <Button
                        isFlex
                        className='items-center text-secondary hover:text-primary'
                        type='link'
                        href={`/rent/${items.id}`}>
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
