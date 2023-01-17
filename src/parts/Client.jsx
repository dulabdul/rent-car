import React from 'react';
import bmw from '../assets/images/design/bmw.svg';
import ford from '../assets/images/design/ford.svg';
import hyundai from '../assets/images/design/hyundai.svg';
import lambo from '../assets/images/design/lambo.svg';
import mazda from '../assets/images/design/mazda.svg';
import mercedez from '../assets/images/design/mercedez.svg';
import nissan from '../assets/images/design/nissan.svg';
import toyota from '../assets/images/design/toyota.svg';
export default function Client() {
  const arrClient = [
    {
      title: 'BMW',
      src: bmw,
    },
    {
      title: 'Ford',
      src: ford,
    },
    {
      title: 'Hyundai',
      src: hyundai,
    },
    {
      title: 'Lamborgini',
      src: lambo,
    },
    {
      title: 'Mazda',
      src: mazda,
    },
    {
      title: 'Mercedez-Bens',
      src: mercedez,
    },
    {
      title: 'Nissan',
      src: nissan,
    },
    {
      title: 'Toyota',
      src: toyota,
    },
  ];
  return (
    <section className='flex items-center justify-center overflow-hidden w-full  md:py-28'>
      <div className='container items-center mx-auto flex flex-wrap gap-x-4 gap-y-6 md:gap-x-16 px-3 py-16 md:py-8 justify-center overflow-hidden'>
        {arrClient.map((items, index) => {
          return (
            <div
              key={index}
              className='w-[75px] flex items-center justify-center h-[75px] overflow-hidden'>
              <img
                src={items.src}
                alt={items.title}
                className='object-cover object-center overflow-hidden w-full grayscale hover:grayscale-0 transition-all ease-in-out'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
