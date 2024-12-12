'use client';

import Image from 'next/image';
import { Button } from '../../ui/button';
import { useEffect } from 'react';
import Logo from '@/assets/svg/logo.svg';

const Header = () => {
  useEffect(() => {
    const headerBrand = document.getElementById('header-brand');
    const handleScroll = () => {
      const y = window.scrollY;
      if (headerBrand) {
        if (y > 37) {
          headerBrand?.classList.add('opacity-0');
          headerBrand?.classList.add('max-h-[0px]');
          headerBrand?.classList.add('overflow-hidden');
        } else if (y === 0) {
          headerBrand?.classList.remove('opacity-0');
          headerBrand?.classList.remove('max-h-[0px]');
          headerBrand?.classList.remove('overflow-hidden');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header id="header" className="sticky top-[0px] z-[99]">
      <div
        id="header-brand"
        className="header-brand bg-blue content-14 text-center py-[8px] transition-all ease-in-out delay-400  "
      >
        Exclusive Offer: Use code <strong>PRESS20</strong> for <strong> 20% off</strong> your order
      </div>
      <div className="header-wrapper border-b border-black bg-white transition-all ease-in-out delay-400">
        <div className="container mx-[auto]">
          <div className="flex items-center py-[12px] justify-between">
            <div className="logo">
              <Image src={Logo} alt="Logo" className="min-w-[120px]" />
            </div>
            <Button variant={'default'} className="uppercase px-6">
              Shop now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
