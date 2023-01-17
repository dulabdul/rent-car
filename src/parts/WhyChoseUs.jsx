import React from 'react';
import carImg from '../assets/images/design/car-chose-us.png';
import btcRefresh from '../assets/images/design/icons/bitcoin-refresh.svg';
import wallet from '../assets/images/design/icons/wallet.svg';
import profile from '../assets/images/design/icons/profile.svg';
import messages from '../assets/images/design/icons/messages.svg';
export default function WhyChoseUs({ whyChoseUsRef }) {
  const arrFeatured = [
    {
      title: 'Cheapest Market Price Guaranteed',
      description: 'We Refund 100% If You Find Cheaper Alternative',
      alt: 'wallet',
      src: wallet,
    },
    {
      title: 'Hire Driver',
      description: 'Don’t have a driver? We got you covered with that too.',
      src: profile,
      alt: 'profile',
    },
    {
      title: 'Same Day Delivery',
      description:
        'Book and we will deliver it directly to you within 24 Hours',
      src: btcRefresh,
      alt: 'Refresh',
    },
    {
      title: '24/7 Support',
      description: 'Contact us if you have any issues',
      src: messages,
      alt: 'Contact Support',
    },
  ];

  return (
    <section
      ref={whyChoseUsRef}
      className='w-full pt-8 md:pt-4 pb-16 md:pb-12 bg-gradient-to-t from-[#FAFAFA] to-[#FAFAFA]  overflow-hidden flex items-center justify-center'>
      <div className='container mx-auto w-full items-center justify-center overflow-hidden grid grid-cols-1 md:grid-cols-2'>
        <div className='w-full h-full overflow-hidden'>
          <img
            src={carImg}
            alt='Car Img Featured'
          />
        </div>
        <div className='w-full h-full flex flex-col justify-center px-4 md:px-0'>
          <h1 className='text-slate-500 text-start my-4 text-base font-normal uppercase'>
            Why Choose Us
          </h1>
          <h2 className='font-semibold text-start text-primary capitalize text-2xl md:text-4xl mb-4'>
            Get the best experience of rental cars
          </h2>
          {arrFeatured.map((items, index) => {
            return (
              <div
                key={index}
                className='w-full flex items-center p-1 md:p-2 justify-start overflow-hidden'>
                <div className='flex items-center justify-center bg-white min-w-[44px] min-h-[44px] shadow-md rounded-xl'>
                  <img
                    src={items.src}
                    alt={items.alt}
                  />
                </div>
                <div className='ml-4 md:ml-6'>
                  <h5 className='capitalize text-primary font-normal text-base md:text-lg'>
                    {items.title}
                  </h5>
                  <p className='text-tersier text-sm md:text-base font-normal capitalize'>
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
