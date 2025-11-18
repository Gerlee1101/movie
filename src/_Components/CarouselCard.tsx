import { WatchButton } from "./WatchButton";
import { Star } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";
type CarouselProps={
  image:string;
  name:string;
  rating:number;
  info:string;
}

export const CarouselCard = (props:CarouselProps) => {
  return (
    <CarouselItem className="w-screen">
      <img
        className="w-full aspect-5/2 object-cover"
        src={props.image}
        alt="nowplayingimage"
      />
      <div className="absolute top-2/7 w-lg pl-35 text-white flex flex-col gap-5">
        <div>
          <p>Now playing:</p>
          <p className="font-bold text-4xl">{props.name}</p>
        </div>
        <div className="flex">
          <Star className="text-yellow-300" fill="#FDE047" />
          <p>{props.rating} </p>
          <p className="text-gray-400">/10</p>
        </div>
        <p className="w-[320px] h-20">{props.info}</p>
        <WatchButton />
      </div>
    </CarouselItem>
  );
};
