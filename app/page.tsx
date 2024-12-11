'use client';

import Image from 'next/image';
import AboutProduct from './components/views/home/AboutProduct';
import BannerSection from './components/views/home/Banner';
import ReviewSection from './components/views/home/Review';

import Rate1 from '@/assets/images/rate-1.jpg';
import Rate2 from '@/assets/images/rate-2.jpg';
import Star from '@/assets/svg/review-2.svg';
import { CardCustom } from './components/common/CardCustom';
import SectionCommon from './components/common/SectionCommon';
import PickDress from './components/views/home/PickPress';
import DetailProduct from './components/views/home/DetailProduct';
import NoriToday from './components/views/home/NoriToday';
import QAProduct from './components/views/home/QAProduct';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-0 ">
      <BannerSection />
      <ReviewSection />
      <AboutProduct />
      <SectionCommon
        left={<Image src={Rate1} alt="rate-1"  className='w-full'/>}
        classWrapper="bg-whiteOne h-[auto]"
        right={
          <CardCustom
            image={Star}
            title="WORKS LIKE A CHARM"
            classDescription={' line-clamp-3 '}
            className="rounded-[0px] flex flex-col items-center border-blue gap-[0] max-h-[auto] justify-center"
            description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
          />
        }
      />
      <SectionCommon
        right={<Image src={Rate2} alt="rate-1" className='w-full' />}
        left={
          <CardCustom
            image={Star}
            title="WORKS LIKE A CHARM"
            classDescription={' line-clamp-3 '}
            className="rounded-[0px] flex flex-col items-center border-blue gap-[0]  h-[auto] justify-center"
            description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
          />
        }
      />

      <PickDress/>
      <DetailProduct />
      <QAProduct/>
      <NoriToday/>
    </main>
  );
}
