import HTMLReactParser from 'html-react-parser';
import React, { useState, useEffect } from 'react';
import Star from '../components/Star';
import Button from '../components/Button';
export default function Rent({ data }) {
  const [slider, setSlider] = useState(null);
  console.log(data?.imageUrls[0]?.url);
  useEffect(() => {
    setSlider(data?.imageUrls[0].url);
  }, [data]);
  console.log(data);
  return (
    <section className='container mx-auto w-full relative pt-32 pb-16 md:py-24'>
      <div className='w-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-1 overflow-hidden  '>
        <div className='thumbnail md:gap-y-2 grid-flow-col grid gap-x-2 -mx-2 overflow-x-auto row-start-2 pl-2 md:grid-flow-row md:row-start-1 md:col-start-1 md:col-end-2 items-center md:justify-center'>
          {data?.imageUrls?.map((item, index) => {
            return (
              <div
                key={item._id + index}
                onClick={() => setSlider(item.url)}>
                <div
                  className={`bg-gray-100 w-[106px] h-[106px] cursor-pointer item transition-all  ${
                    slider === item.url ? 'selected' : ''
                  }`}>
                  <img
                    src={item.url}
                    className='overflow-hidden rounded-lg object-cover w-full h-full object-center'
                    alt={data?.name}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className='w-full md:ml-3 py-6 h-[420px] md:h-[609px] md:w-[600px] md:col-start-2 md:col-end-7 md:row-start-1'>
          <div className='w-full h-full overflow-hidden bg-gray-100 md:rounded-lg transition-all '>
            <img
              src={slider}
              alt={data?.name}
              className='object-cover object-center w-full h-full overflow-hidden'
            />
          </div>
        </div>
        <div className='px-3 w-full py-8 flex gap-y-2   mx-auto md:col-start-8 md:row-start-1 md:col-end-13 flex-col md:justify-start'>
          <h2 className='font-semibold text-primary text-4xl leading-normal'>
            {data?.name}
          </h2>
          <div className='flex items-center'>
            <Star
              value={data?.review}
              width={24}
              height={24}
              spacing={2}></Star>
            <span className='text-primary font-normal text-sm'>
              {data?.review}{' '}
            </span>
            <span className='text-[10px] font-light text-tersier'>
              {'[100+ review]'}
            </span>
          </div>
          <p className='text-xl font-normal text-primary'>
            $ {data?.price}/day
          </p>
          <h5 className='text-3xl text-primary'>About the car</h5>
          <div className='text-primary'>
            {data?.description ? HTMLReactParser(data?.description) : 'Loading'}
          </div>
          <Button
            type='link'
            target='_blank'
            isExternal
            isFlex
            href='https://api.whatsapp.com/send?phone=6281213366247&text=Halo%20saya%20Abdul%20ingin%20menyewa%20mobil'
            isRounded
            isSecondary
            className='button items-center justify-center mt-2 md:w-1/2'>
            Rent Now
          </Button>
        </div>
      </div>
    </section>
  );
}
