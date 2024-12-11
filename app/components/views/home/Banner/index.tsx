import Image, { StaticImageData } from 'next/image';
import Banner from '@/assets/images/banner.jpg';
import { Button } from '@/app/components/ui/button';

import React from 'react';
import { features } from '../costants';
const BannerSection = () => {

  const renderItem = (item: {icon: StaticImageData, label: string})=>{
    return(
        <div className="item flex items-center gap-2 mb-[16px]">
            <Image src={item.icon} alt="icon"  className='size-[32px]'/>
             <p className='content-18 text-text'>{item.label}</p>
        </div>
    )
  }
  return (
    <section id="banner" className="bg-whiteOne w-full">
      <div className="grid grid-cols-1 tablet:grid-cols-2 container mx-[auto]  ">
        <div className="info  py-16 ">
          <h1 className="heading-1 text-text mb-[24px]">Meet the Nori Press, <br/> Ironing Made Easy.</h1>
          <h2 className="heading-2 text-text mb-[24px]">Time to Say GOODBYE to...</h2>

          <ul>
            {features.map((item, index: number) => (
              <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
            ))}
          </ul>

          <Button variant={'default'} className="content-12  mt-[24px] uppercase px-8 py-4 tablet:w-[auto] w-full">
            Pick my press + Get 20% OFF
          </Button>
        </div>
        <Image src={Banner} alt="banner-image" className="h-full w-full" />
      </div>
    </section>
  );
};

export default BannerSection;
