import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactElement } from "react";

export function SurveyDialog({
  children,
  currentStep,
  totalQuiz,
}: {
  children: ReactElement;
  currentStep: number;
  totalQuiz: number;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <span className="content-14 mb-[16px] text-white">
              Quiz {currentStep} / {totalQuiz}
            </span>
            <div className="flex">
              {Array.from({ length: totalQuiz })?.map((_, index: number) => (
                <div className={"h-4 w-full"} key={index}></div>
              ))}
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
      </DialogContent>
    </Dialog>
  );
}
