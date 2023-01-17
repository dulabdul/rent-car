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
import Star from '../components/Star';

export default function Testimonial({ testimonialRef }) {
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
    <section
      ref={testimonialRef}
      className='w-full flex justify-center flex-col bg-gradient-to-t from-[#FAFAFA] to-[#FAFAFA] pt-24 pb-96 relative'>
      <h1 className='text-tersier text-base my-5 font-normal uppercase text-center'>
        Testimonials
      </h1>
      <h2 className='font-semibold text-primary text-2xl md:text-3xl text-center pb-12 md:py-4'>
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
              className='grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden items-center justify-center'>
              <div className='w-full h-[350px] md:h-[525px] p-1'>
                <img
                  src={items.imgUrl}
                  alt={items.name}
                  className='object-cover object-center bg-no-repeat w-full h-full'
                />
              </div>
              <div className='myCarousel w-full h-full flex flex-col justify-evenly px-4 pt-3 pb-12 md:pb-0 md:pt-0 md:px-8 md:py-6'>
                <p className='text-start text-primary text-lg md:text-2xl'>
                  {items.review}
                </p>
                <div className='text-start'>
                  <h3 className='text-primary text-start my-3 md:my-0 text-2xl md:text-3xl font-semibold capitalize'>
                    {items.name}
                  </h3>
                  <h4 className='text-tersier text-start mb-2 md:mb-0 text-base md:text-lg font-normal'>
                    {items.job}
                  </h4>
                  <div className='flex items-center'>
                    <Star
                      value={items.star}
                      width={28}
                      height={28}
                      spacing={4}></Star>
                    <span className='text-primary ml-4'>{items.star}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <div className='w-full overflow-hidden flex items-center justify-center bottom-[-20%] absolute'>
        <div className='md:w-[1160px] md:h-[332px] grid grid-cols-2 container mx-auto bg-gradient-to-tr from-[#20BFB6] to-[#2fe8df] rounded-xl md:rounded-2xl'>
          <div className='w-full overflow-hidden flex flex-col justify-evenly md:justify-start p-4 md:px-12 md:py-8'>
            <div>
              <h1 className='text-primary font-semibold capitalize text-2xl md:text-4xl my-2 md:my-4 z-50'>
                Download Carmania App for free
              </h1>
              <p className='text-slate-700 z-50'>
                For faster, easier booking and exclusive deals.
              </p>
            </div>
            <div className='flex flex-col md:flex-row items-center gap-y-3 md:gap-y-0 py-4 md:py-12 gap-x-4 z-50 overflow-hidden'>
              <Button
                isPrimary
                isRounded
                hasShadow
                isFlex
                className='button items-center w-full md:w-auto'>
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
                className='button items-center md:w-auto w-full'>
                <img
                  src={gPlay}
                  alt='Google Play'
                  className='w-6 h-6 md:w-8 md:h-8'
                />
                <div className='ml-1 md:ml-0'>
                  <span className='uppercase text-[10px] font-light text-center'>
                    Get in on
                  </span>
                  <h5 className='text-center font-medium text-lg'>
                    Google Play
                  </h5>
                </div>
              </Button>
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
            <div className='w-full flex  md:justify-end md:gap-x-8 flex-col md:flex-row flex-wrap md:flex-nowrap'>
              <div className='z-50 flex justify-start md:block'>
                <img
                  src={phone1}
                  alt='Dummy Phone'
                  className='object-cover object-center bg-no-repeat h-[250px] md:h-auto'
                />
              </div>
              <div className='z-50 flex justify-end md:block'>
                <img
                  src={phone2}
                  alt='Dummy Phone '
                  className='object-cover object-center bg-no-repeat h-[250px] md:h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
