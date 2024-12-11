import Image, { StaticImageData } from 'next/image';
import React from 'react';

import Review1 from '@/assets/svg/review-1.svg';
import Review2 from '@/assets/svg/review-2.png';
import Review3 from '@/assets/svg/review-3.png';

const ReviewSection = () => {
  const items = [
    {
      text: '“An iron that doesn’t require an ironing board and doubles as a steamer. An absolute game-changer”',
      brandLogo: Review1,
    },
    {
      text: '“The Handheld Steam Iron the Internet Won’t Stop Talking About”',
      brandLogo: Review2,
    },
    {
      text: "“If you've ever felt like your clothes steamer just isn't cutting it, The Nori Press is the solution”",
      brandLogo: Review3,
    },
  ];
  const renderReviewItem = (item: { text: string; brandLogo: StaticImageData }) => {
    return (
      <div className="review-item flex flex-col items-center ">
        <span className="content-18 min-h-[81px] flex items-center flex-col justify-center text-center  mb-[24px] tablet:w-full w-[calc(100%-80px)]">{item.text}</span>
        <Image src={item.brandLogo} alt={'brand-logo'} className='' />
      </div>
    );
  };
  return (
    <section id="review-section" className="bg-blueOne py-10 tablet:py-20 w-full">
      <div className="container mx-auto">
        <div className="title text-center heading-2 mb-[32px] text-text">Happy Customers</div>
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8 tablet:gap-16">
          {items.map((item, index: number) => (
            <React.Fragment key={index}>{renderReviewItem(item)}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
