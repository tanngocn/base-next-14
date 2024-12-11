import SectionCommon from '@/app/components/common/SectionCommon';
import { ironOut } from '../costants';

const QAProduct = () => {
  return (
    <SectionCommon
      classWrapper="bg-white w-full h-full items-stretch tablet:flex"
      left={
        <div className="flex gap-4 w-full justify-center flex-col items-center bg-image-1 bg-blueTwo min-h-[300px] tablet:min-h-full">
          <h2 className="heading-1 text-center text-white">
            Let's Iron Out <br /> the Details
          </h2>
        </div>
      }
      right={
        <>
          <div className="flex flex-col gap-2 tablet:gap-6 w-full">
            {ironOut?.map((item, index: number) => (
              <div className="flex flex-col gap-4 py-6 border-b border-black  tablet:max-w-[calc(100%-120px)]">
                <h3 className="heading-2 ">{item.title}</h3>
                <p className="content-16 ">{item.content}</p>
              </div>
            ))}
          </div>
        </>
      }
    />
  );
};

export default QAProduct;
