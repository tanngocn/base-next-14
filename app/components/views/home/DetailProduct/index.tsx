import Describe1 from '@/assets/svg/describe-1.svg';
import Describe2 from '@/assets/images/describe-2.png';
import Describe2Mobile from '@/assets/images/describe-2-mobile.png';
import Describe1Mobile from '@/assets/svg/describe-1-mobile.svg';
import Image from 'next/image';
const DetailProduct = () => {
  return (
    <section id="detail-product" className="py-10 tablet:py-[100px] relative text-text bg-gradient-one w-full">
      <div className="container  mx-[auto]">
        <h2 className="heading-1 text-center mb-0 tablet:mb-20">We've Thought of Everything</h2>
        <div className="hidden tablet:flex flex-col">
          <Image src={Describe1} alt="" className='z-[2]' />
          <Image src={Describe2} alt="" className="absolute top-[45%] left-[52%] -translate-x-1/2 z-[1]  " />
        </div>{' '}
        <div className="flex tablet:hidden flex-col py-10 justify-center  items-center">
          <Image src={Describe2Mobile} alt="" className="pb-10" />
          <Image src={Describe1Mobile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
