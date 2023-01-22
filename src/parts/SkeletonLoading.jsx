import React from 'react';
import Star from '../components/Star';
function SkeletonLoadingPopularRent() {
  return (
    <div className='bg-white shadow-lg relative overflow-hidden animate-pulse p-1 md:p-2 rounded-xl w-11/12 md:w-[272px] h-[385px]'>
      <div className='h-[165px] flex flex-col p-1 justify-between overflow-hidden bg-slate-300 rounded-xl animate-pulse'></div>
      <div className='w-52 h-3 bg-slate-400 rounded-xl my-4'></div>
      <div className='w-44 h-3 bg-slate-400 rounded-xl my-4'></div>
      <div className='w-full grid grid-cols-2 gap-y-5 mt-8'>
        <div className='w-11/12 h-3 bg-slate-200 rounded-xl'></div>
        <div className='w-11/12 h-3 bg-slate-200 rounded-xl'></div>
        <div className='w-11/12 h-3 bg-slate-200 rounded-xl'></div>
        <div className='w-11/12 h-3 bg-slate-200 rounded-xl'></div>
      </div>
      <hr className='mt-6' />
      <div className='w-full grid grid-cols-2 mt-4'>
        <div className='w-11/12 h-3 bg-slate-200 rounded-xl'></div>
        <div className='w-11/12 h-3 bg-slate-200 rounded-xl'></div>
      </div>
    </div>
  );
}
function SkeletonLoadingTestimonials() {
  return (
    <div className='carousel-root animate-pulse bg-slate-300 w-full h-full overflow-hidden grid grid-cols-1 md:grid-cols-2'>
      <div className='w-full h-[350px] md:h-[525px] animate-pulse bg-slate-400'></div>
      <div className='w-full flex flex-col gap-y-4 px-4 justify-evenly pt-3 pb-12 md:pb-0 md:pt-0 md:px-8 md:py-8'>
        <div className='flex gap-y-4 flex-col'>
          <div className='w-96 h-3 bg-slate-400 rounded-xl'></div>
          <div className='w-80 h-3 bg-slate-400 rounded-xl'></div>
          <div className='w-72 h-3 bg-slate-400 rounded-xl'></div>
          <div className='w-96 h-3 bg-slate-400 rounded-xl'></div>
          <div className='w-80 h-3 bg-slate-400 rounded-xl'></div>
          <div className='w-72 h-3 bg-slate-400 rounded-xl'></div>
        </div>
        <div className='flex flex-col gap-y-3'>
          <div className='w-56 h-3 bg-slate-500 rounded-xl'></div>
          <div className='w-48 h-3 bg-slate-500 rounded-xl'></div>
          <Star
            value={0}
            width={28}
            height={28}
            spacing={4}></Star>
        </div>
        <div className='flex justify-center gap-x-3'>
          <div className='w-8 h-2 bg-slate-500 rounded-md'></div>
          <div className='w-8 h-2 bg-slate-500 rounded-md'></div>
          <div className='w-8 h-2 bg-slate-500 rounded-md'></div>
          <div className='w-8 h-2 bg-slate-500 rounded-md'></div>
        </div>
      </div>
    </div>
  );
}
function SkeletonLoadingRent() {
  return (
    <section className='container mx-auto w-full relative pt-32 pb-16 md:py-24'>
      <div className='w-full grid grid-cols-1 md:grid-cols-12 md:grid-rows-1 overflow-hidden  '>
        <div className='thumbnail md:gap-y-2 grid-flow-col grid gap-x-2 -mx-2 overflow-x-auto row-start-2 pl-2 md:grid-flow-row md:row-start-1 md:col-start-1 md:col-end-2 items-center md:justify-center'>
          {Array(5)
            .fill()
            .map((_, index) => {
              return (
                <div key={index}>
                  <div className='bg-slate-300 w-[106px] h-[106px] animate-pulse'></div>
                </div>
              );
            })}
        </div>
        <div className='w-full md:ml-3 py-6 h-[420px] md:h-[609px] md:w-[600px] md:col-start-2 md:col-end-7 md:row-start-1 animate-pulse'>
          <div className='w-full h-full overflow-hidden bg-slate-300 md:rounded-lg transition-all '></div>
        </div>
        <div className='px-3 w-full py-8 flex gap-y-2   mx-auto md:col-start-8 md:row-start-1 md:col-end-13 flex-col md:justify-start'>
          <div className='w-80 h-8 rounded-xl bg-slate-300'></div>
          <div className='flex items-center'>
            <Star
              value={0}
              width={24}
              height={24}
              spacing={2}></Star>
          </div>
          <div className='w-56 h-3 mt-4 rounded-xl bg-slate-300'></div>
          <div className='w-64 h-6 mt-3 rounded-xl bg-slate-300'></div>
          <div className='flex flex-col flex-wrap gap-y-4 mt-8'>
            <div className='w-96 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-80 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-72 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-96 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-80 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-72 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-96 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-80 h-3 rounded-xl bg-slate-300'></div>
            <div className='w-72 h-3 rounded-xl bg-slate-300'></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export {
  SkeletonLoadingPopularRent,
  SkeletonLoadingTestimonials,
  SkeletonLoadingRent,
};
