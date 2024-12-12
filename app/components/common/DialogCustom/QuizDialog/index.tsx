import { cn } from "@/app/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

export function QuizDialog({
  children,
  questions,
  onNextStep,
  onClose,
  onFinishQuiz,
  currentStep,
}: {
  children: ReactElement;
  onNextStep: (value: string) => void;
  onClose: () => void;
  onFinishQuiz: () => void;
  questions: {
    title: string;
    answer: { label: string; image: StaticImageData }[];
  }[];
  currentStep: number;
}) {
  const currentAnswer = questions[currentStep].answer;
  const title = questions[currentStep].title;
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="tablet:max-w-full max-w-[calc(100%-32px)] px-[8px] tablet:px-[16px] tablet:max-w-[600px] tablet:px-[24px]">
        <DialogClose asChild>
          <div className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" onClick={onClose} />
            <span className="sr-only">Close</span>
          </div>
        </DialogClose>
        <DialogHeader>
          <DialogTitle>
            <p className="content-14 mb-[16px] text-primary">
              Quiz {currentStep + 1} / {questions.length}
            </p>
            <div className="flex">
              {Array.from({ length: questions.length })?.map(
                (_, index: number) => (
                  <div
                    className={cn("h-4 w-full ", {
                      "bg-blue": index <= currentStep,
                    })}
                    key={index}
                  ></div>
                )
              )}
            </div>
            <h2 className="heading-2 mt-[24px]  mx-auto">{title}</h2>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 grid-cols-3 tablet:grid-cols-3">
          {currentAnswer.map((item, index: number) => (
            <div
              className="flex flex-col cursor-pointer p-1 items-center justify-center"
              key={index}
              onClick={
                currentStep < questions.length - 1
                  ? () => onNextStep(item.label)
                  : () => onFinishQuiz()
              }
            >
              <Image
                src={item.image}
                alt="image-quiz"
                className="h-full w-full"
              />
              <span className="content-14 tablet:content-16 p-4">{item.label}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
