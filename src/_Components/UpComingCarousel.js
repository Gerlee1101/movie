import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselCard } from "./CarouselCard";

export const UpComingCarousel = () => {
  return (
    <div className="w-screen mt-10 ">
      <Carousel className="w-screen   max-w-full">
        <CarouselContent className="">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className=" flex gap-56">
              <div className="">
                <CarouselCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
    </div>
  );
};
