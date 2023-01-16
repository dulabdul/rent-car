import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiTwotoneStar } from 'react-icons/ai';
import people1 from '../assets/images/design/people-1.jpg';
import people2 from '../assets/images/design/people-2.jpg';
import people3 from '../assets/images/design/people-3.jpg';
import people4 from '../assets/images/design/people-4.jpg';
import gPlay from '../assets/images/design/icons/gplay.svg';
import { AiFillApple } from 'react-icons/ai';
import Button from '../components/Button';
import phone1 from '../assets/images/design/phone1.png';
import phone2 from '../assets/images/design/phone2.png';
import elipse10 from '../assets/images/design/icons/elipse10.svg';
import elipse11 from '../assets/images/design/icons/elipse11.svg';
import elipse12 from '../assets/images/design/icons/elipse12.svg';
import elipse13 from '../assets/images/design/icons/elipse13.svg';
import elipse14 from '../assets/images/design/icons/elipse14.svg';
import elipse15 from '../assets/images/design/icons/elipse15.svg';
export default function Testimonial() {
  const arrTestimonial = [
    {
      name: 'Shirley Fultz',
      job: 'Designer',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 4.8,
      imgUrl: people1,
    },
    {
      name: 'John Doe',
      job: 'Backend Dev',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 4.5,
      imgUrl: people2,
    },
    {
      name: 'Nao Lynn',
      job: 'Public Relationship',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 5.0,
      imgUrl: people3,
    },
    {
      name: 'Linda',
      job: 'Broadcasting',
      review:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui distinctio error explicabo sapiente labore odio perspiciatis voluptatum ipsum iure ullam.',
      star: 4.4,
      imgUrl: people4,
    },
  ];
  return (
    <section className='w-full flex justify-center flex-col bg-gradient-to-t from-[#FAFAFA] to-[#FAFAFA] pt-24 pb-96 relative'>
      <h1 className='text-tersier text-base my-5 font-normal uppercase text-center'>
        Testimonials
      </h1>
      <h2 className='font-semibold text-primary text-3xl text-center'>
        What people say about us?
      </h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={6100}>
        {arrTestimonial.map((items, index) => {
          return (
            <div
              key={index}
              className='grid grid-cols-2 w-full overflow-hidden items-center justify-center'>
              <div className='w-full h-[525px] p-1'>
                <img
                  src={items.imgUrl}
                  alt={items.name}
                  className='object-cover object-center bg-no-repeat w-full h-full'
                />
              </div>
              <div className='myCarousel w-full h-full flex  flex-col justify-evenly px-8 py-6'>
                <p className='text-start text-primary text-2xl'>
                  {items.review}
                </p>
                <div className='text-start'>
                  <h3 className='text-primary text-start text-3xl font-semibold capitalize'>
                    {items.name}
                  </h3>
                  <h4 className='text-tersier text-start text-lg font-normal'>
                    {items.job}
                  </h4>
                  <div className='flex items-center'>
                    <AiTwotoneStar className='text-yellow-300 text-2xl mr-1' />{' '}
                    {items.star}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className='w-full overflow-hidden flex items-center justify-center bottom-[-20%] absolute z-10'>
        <div className='w-[1160px] h-[332px] grid grid-cols-2 container mx-auto bg-gradient- from-[#20BFB6] to-[#2fe8df] rounded-2xl'>
          <div className='w-full overflow-hidden flex flex-col px-12 py-8'>
            <h1 className='text-primary font-semibold capitalize text-4xl my-4 z-50'>
              Download Carmania App for free
            </h1>
            <p className='text-slate-700 z-50'>
              For faster, easier booking and exclusive deals.
            </p>
            <div className='flex items-center py-12 gap-x-4 z-50'>
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
            <div className='absolute z-20 bottom-0 left-0'>
              <img
                src={elipse15}
                alt='elipse'
              />
            </div>
            <div className='absolute z-20 bottom-0 left-0'>
              <img
                src={elipse14}
                alt='elipse'
              />
            </div>
            <div className='absolute z-20 bottom-0 left-0'>
              <img
                src={elipse13}
                alt='elipse'
              />
            </div>
          </div>
          <div className='w-full flex justify-end inset-0 '>
            <div className='absolute z-20'>
              <img
                src={elipse12}
                alt='elipse'
              />
            </div>
            <div className='absolute z-20'>
              <img
                src={elipse11}
                alt='elipse'
              />
            </div>
            <div className='absolute z-20'>
              <img
                src={elipse10}
                alt='elipse'
              />
            </div>
            <div className='z-50 '>
              <img
                src={phone1}
                alt='Dummy Phone '
              />
            </div>
            <div className='z-50'>
              <img
                src={phone2}
                alt='Dummy Phone '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
