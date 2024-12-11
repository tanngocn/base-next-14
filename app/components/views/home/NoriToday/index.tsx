import SectionCommon from '@/app/components/common/SectionCommon';
import Image from 'next/image';
import Nori from '@/assets/images/nori.jpg';
import { Button } from '@/app/components/ui/button';
const NoriToday = () => {
  return (
    <SectionCommon
      left={
        <div className="flex flex-col gap-4 w-full">
          <h2 className="heading-1 text-primary leading-[30px]">Get Your Nori Today</h2>
          <span>(Ironing Board Not Included)</span>
          <Button variant={'default'} className="py-2 px-10 h-[48px] uppercase w-fit ">
            Shop the nori press
          </Button>
          <span>
            Use code <strong>SUMMER20</strong> for <strong>20% off</strong> your order
          </span>
        </div>
      }
      classWrapper="bg-whiteOne w-full"
      right={
        <div className="flex flex-col gap-6 w-full">
          <Image src={Nori} alt="pick-press" className="w-full" />
        </div>
      }
    />
  );
};

export default NoriToday;
