import Image from 'next/image';
import LogoFooter from '@/assets/svg/logo-footer.svg';
import Link from 'next/link';

const Footer = () => {
  const copyrightText = '© 2024 Nori, Inc. All Rights Reserved.';
  return (
    <footer className="py-[24px] tablet:py-14 bg-primary w-full">
      <div className="container flex flex-col items-center mx-auto justify-center gap-4">
        <div className="logo">
          <Image src={LogoFooter} alt="logo-footer" className="max-w-[198px] h-[58px]" />
        </div>
        <div className="flex items-center justify-center content-16 text-white gap-4 mt-[24px]">
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Use</Link>
        </div>

        <p className="content-16 text-white">{copyrightText}</p>
      </div>
    </footer>
  );
};
export default Footer;
