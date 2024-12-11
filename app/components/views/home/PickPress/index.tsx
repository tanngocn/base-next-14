import SectionCommon from "@/app/components/common/SectionCommon";
import Image from "next/image";
import PickPress1 from '@/assets/images/pick-press-1.jpg';
import PickPress2 from '@/assets/images/pick-press-2.png';
import { Button } from "@/app/components/ui/button";
const PickDress = ()=>{

    return (
      <SectionCommon
        left={
          <div className="flex flex-col gap-6 w-full">
            <h2 className="heading-1 text-primary">
              So You Have One Less <br /> Wrinkle to Worry About
            </h2>
            <Image src={PickPress1} alt="pick-press" className="w-full" />
          </div>
        }
        classWrapper="bg-whiteOne w-full"
        right={
          <div className="flex flex-col gap-6 w-full">
            <Image src={PickPress2} alt="pick-press"  className="w-full"/>
            <Button variant={'default'} className="content-16 h-[48px] uppercase">
              Pick my press
            </Button>
          </div>
        }
      />
    );
}

export default PickDress;