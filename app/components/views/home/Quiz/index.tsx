import { QuizDialog } from "@/app/components/common/DialogCustom/QuizDialog";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";

import Image1 from "@/assets/images/white-product/1.jpg";
import Image2 from "@/assets/images/white-product/2.jpg";
import Image3 from "@/assets/images/white-product/3.jpg";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<string[]>([]);
  const questions = [
    {
      title: "Which activity would you like to do?",
      answer: [
        {
          label: "Happy hour",
          image: Image1,
        },
        {
          label: "Hiking",
          image: Image2,
        },
        {
          label: "Sailing",
          image: Image3,
        },
      ],
    },
    {
      title: "Which view would you like to see?",
      answer: [
        {
          label: "The city",
          image: Image1,
        },
        {
          label: "The Mountains",
          image: Image2,
        },
        {
          label: "The Beach",
          image: Image3,
        },
      ],
    },
    {
      title: "Which food dish is your favorite?",
      answer: [
        {
          label: "Pasta",
          image: Image1,
        },
        {
          label: "Steak",
          image: Image2,
        },
        {
          label: "Salad",
          image: Image3,
        },
      ],
    },
  ];

  const handleNextStep = (value: string) => {
    setCurrentStep((c) => c + 1);
    const newResult = [...result];
    newResult.push(value);
    setResult(newResult);
  };
  const handleFinishQuiz = () => {
    // TODO
  };
  const handleClose = () => {
    setCurrentStep(0);
    setResult([]);
  };
  return (
    <div className="flex items-center justify-center py-20">
      <QuizDialog
        currentStep={currentStep}
        questions={questions}
        onClose={handleClose}
        onNextStep={handleNextStep}
        onFinishQuiz={handleFinishQuiz}
      >
        <Button variant={"default"} className="h-[48px]">
          Take the quiz {"->"}
        </Button>
      </QuizDialog>
    </div>
  );
};
export default QuizSection;
