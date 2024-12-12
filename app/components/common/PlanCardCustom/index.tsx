import { FC, ReactElement } from 'react';
import { Button } from '../../ui/button';
import { SurveyDialog } from '../DialogCustom/SurveyDialog';
import { cn } from '@/app/lib/utils';

interface IPlanCardCustomProps {
  data: {
    type: string;
    price: number;
    description: ReactElement;
    discountPercent?: number;
  };
  isCenter?: boolean;
}

const PlanCardCustom: FC<IPlanCardCustomProps> = ({ data, isCenter = false }) => {
  const priceDiscount = data?.discountPercent ? data?.price - (data?.price * data?.discountPercent) / 100 : data?.price;

  const handleClose = () => {};
  return (
    <div className="flex flex-col items-center p-6  gap-6 bg-gradient-one  text-primary border border-blueTwo">
      <span className="heading-2 uppercase ">{data?.type}</span>
      <div className="price flex flex-col justify-center items-center min-h-[120px]">
        <span
          className={cn({
            'heading-1': !data?.discountPercent,
            'heading-2': data?.discountPercent,
          })}
        >
          ${data?.price}
        </span>
        {data?.discountPercent && <span className="heading-1">${priceDiscount}</span>}
      </div>
      {data?.discountPercent && (
        <div className="absolute right-[16px] h-[48px] w-[100px] bg-primary text-white flex items-center justify-center">
          {data?.discountPercent}%
        </div>
      )}

      <div className="w-full">{data?.description}</div>

      <SurveyDialog onClose={handleClose}>
        <Button variant={isCenter ? 'default' : 'outline'} className="w-full tablet:w-fit">
          Register Now
        </Button>
      </SurveyDialog>
    </div>
  );
};

export default PlanCardCustom;
