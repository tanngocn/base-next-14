import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/app/lib/utils";

export function CarouselSize({
  slides = Array.from({ length: 5 }),
}: {
  slides: any[];
}) {
  const [activeItem, setActiveItem] = React.useState(0);

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {slides.map((_, index) => (
          <CarouselItem
            key={index}
            className={cn("md:basis-1/2 lg:basis-1/3", {
              active: index === activeItem,
            })}
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
