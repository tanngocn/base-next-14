import PlanCardCustom from '@/app/components/common/PlanCardCustom';
import { useState } from 'react';

const PlanSection = () => {
  const [planSelected, setPlanSelected] = useState();

  return (
    <section id="plan-section" className="py-10 tablet:py-20 w-full">
      <div className="container text-text">
        <h2 className="text-center uppercase heading-1 mb-[24px]">Choose a plan</h2>
        <p className="content-16 text-center tablet:max-w-[50%] mb-[16px] ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eligendi porro ex dolores, consectetur
          quasi eos
        </p>
        <div className="grid grid-cols-1 tablet:grid-cols-3  gap-8 tablet:gap-14">
          <PlanCardCustom
            data={{
              type: 'basic',
              price: 0,
              description: (
                <ul>
                  {Array.from({ length: 3 })?.map((_, index: number) => (
                    <div className="flex items-center gap-1" key={index}>
                      <span className="size-[8px] bg-primary rounded-full  "></span>
                      <li className=" text-left py-2 w-[calc(100-40px)] ">{`description ${index + 1}`}</li>
                    </div>
                  ))}
                </ul>
              ),
            }}
          />
          <PlanCardCustom
            data={{
              type: 'expert',
              price: 50,
              discountPercent: 20,

              description: (
                <ul>
                  {Array.from({ length: 3 })?.map((_, index: number) => (
                    <div className="flex items-center gap-1" key={index}>
                      <span className="size-[8px] bg-primary rounded-full  "></span>
                      <li className=" text-left py-2 w-[calc(100-40px)] ">{`description ${index + 1}`}</li>
                    </div>
                  ))}
                </ul>
              ),
            }}
            isCenter={true}
          />
          <PlanCardCustom
            data={{
              type: 'advanced',
              price: 30,
              description: (
                <ul>
                  {Array.from({ length: 3 })?.map((_, index: number) => (
                    <div className="flex items-center gap-1" key={index}>
                      <span className="size-[8px] bg-primary rounded-full  "></span>
                      <li className=" text-left py-2 w-[calc(100-40px)] ">{`description ${index + 1}`}</li>
                    </div>
                  ))}
                </ul>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
