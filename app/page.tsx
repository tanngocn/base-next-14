"use client";
import { CarouselSize } from "./components/common/CarouselCustom";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant={"default"}>Password</Button>

      <CarouselSize slides={Array.from({ length: 5 })} />
    </main>
  );
}
