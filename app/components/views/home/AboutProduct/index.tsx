import { useEffect, useMemo, useState } from 'react';
import Raiting from '@/assets/svg/rate.svg';
import PaymentMethod from '@/assets/svg/payment-method.svg';

import Star from '@/assets/svg/review-2.svg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { cn } from '@/app/lib/utils';
import { Button } from '@/app/components/ui/button';
import { CardCustom } from '@/app/components/common/CardCustom';
import { accordionProducts, COLORS, feature2, features, imagesAboutProduct } from '../costants';
import { AccordionCustom } from '@/app/components/common/AccordionCustom';

const AboutProduct = () => {
  const [color, setColor] = useState(COLORS.WHITE);
  const [imageActive, setImageActive] = useState(0);

  useEffect(() => {
    setImageActive(0);
  }, [color]);

  const handleChangeColor = (color: string) => {
    setColor(color);
  };

  const viewImage = (index: number) => {
    setImageActive(index);
  };
  const renderUI = (items: string[])=>{
    return (
      <ul className="list">
        {items.map((item, index: number) => (
          <li key={index} className="content-16 py-1 flex items-center gap-1">
            <div className="dot !size-[8px] !bg-primary mr-4"></div>
            <span className='basis-[calc(100%-40px)]'> {item}</span>
          </li>
        ))}
      </ul>
    );
  }
  const accordCustom = accordionProducts?.map((item)=>{
    const object ={
        key:item.key,
        title: item.title,
        content: renderUI(item.items)
    }   
    return object
  });

  return (
    <section id="about-product" className="w-full py-10 tablet:py-20 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:gap-12">
          <div className="left tablet:sticky tablet:top-[78px] max-h-[600px]">
            <div className="flex flex-col justify-center ">
              <div className="image-active w-full">
                <Image src={imagesAboutProduct[color][imageActive]} alt="product image" className="w-full" />
              </div>
              <div className="flex justify-center items-center gap-[24px] mt-[32px] ">
                {imagesAboutProduct[color]?.map((item: StaticImageData, index: number) => (
                  <Image
                    src={item}
                    key={index}
                    alt="product image"
                    onClick={() => viewImage(index)}
                    className={cn('size-[40px] tablet:size-[56px] cursor-pointer border border-white', {
                      'size-[48px] tablet:size-[67.5px] p-1 border-primary': imageActive === index,
                    })}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="right flex flex-col gap-6 text-text">
            <Image src={Raiting} alt="rate" />
            <h2 className="heading-1">Nori Press</h2>
            <p className="content-16">
              Our premier wrinkle-removal product designed to press, steam and refresh your clothes with ease. Check it
              out in action in our{' '}
              <Link href={'#'} className="font-[600] underline">
                How to Use
              </Link>{' '}
              section.
            </p>
            <div className="content-16 uppercase flex items-center ">
              <span className="uppercase font-[700]">CHOOSE YOUR COLOR:</span>
              <span className="ml-4 capitalize">{color}</span>
            </div>
            <div className="flex items-center gap-3">
              {Object.values(COLORS)?.map((item: string, index: number) => (
                <div
                  className={cn(
                    `border cursor-pointer border-gray size-[32px] rounded-full flex items-center justify-center`,
                    {
                      'border-primary': item === color,
                    }
                  )}
                  onClick={() => handleChangeColor(item)}
                >
                  <span
                    className={cn(`size-[26px] block rounded-full `, {
                      'bg-whiteTwo': item === COLORS.WHITE,
                      'bg-pink': item === COLORS.PINK,
                    })}
                  ></span>
                </div>
              ))}
            </div>
            <div className="payment flex flex-col gap-1 text-text">
              <Button
                variant={'default'}
                className="mt-[16px] w-full h-[48px] content-16 text-white flex items-center gap-1"
              >
                <span>Save 20% Now </span>
                <span className="dot"></span>
                <span>$96</span>
                <span className="line-through">$126</span>
              </Button>
              <span className="flex justify-center gap-2 items-center content-14">
                or 4 interest-free payments of $24 with
                <Image src={PaymentMethod} alt="payment method" />
              </span>
            </div>

            <CardCustom
              image={Star}
              title="WORKS LIKE A CHARM"
              classDescription={' line-clamp-3 '}
              className="rounded-[0px] flex flex-col items-center border-blue gap-[0]"
              description="I'm a teacher and I use my Nori at least three times a week on my work pants! It is so easy to use and I love that I don't have to take out my clunky ironing board. Highly recommend!"
            />

            <div className="features bg-blue flex tablet:flex-row flex-col gap-4 tablet:items-center p-4 justify-between">
                {feature2.map((item, index)=>(
                    <div className="flex gap-2 items-center">
                        <Image src={item.icon} alt='icon-feature' className='size-[32px]'/>
                         <span className='content-14 tablet:max-w-[90px]'>{item.label}</span>
                    </div>
                ))}
            </div>
            <div className="accrodion">
                <AccordionCustom  items={accordCustom}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
