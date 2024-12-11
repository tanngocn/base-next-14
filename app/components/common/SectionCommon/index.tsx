import { cn } from '@/app/lib/utils';
import { FC, ReactElement } from 'react';

interface ISectionCommonProps {
  left: ReactElement;
  right: ReactElement;
  classWrapper?: string;
}

const SectionCommon: FC<ISectionCommonProps> = ({ left, right, classWrapper = 'bg-white' }) => {
  return (
    <section id="raiting" className={cn('py-10 tablet:py-20 w-full ', classWrapper)}>
      <div className="flex items-center flex-col tablet:flex-row container mx-[auto] gap-10 tablet:gap-20">
        {left}
        {right}
      </div>
    </section>
  );
};

export default SectionCommon;
