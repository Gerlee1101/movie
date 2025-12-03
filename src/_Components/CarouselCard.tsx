import { WatchButton } from "./WatchButton";
import { Star } from "lucide-react";
import { CarouselItem } from "@/components/ui/carousel";
import { Movie } from "./MovieSectionList";
// type CarouselProps = {
//   image: string;
//   name: string;
//   rating: number;
//   info: string;

// };

export const CarouselCard = (props: Movie) => {
  return (
    <CarouselItem className="w-screen">
      <img
        className="w-full aspect-5/2 object-cover"
        src={props.backdrop_path}
        alt="nowplayingimage"
      />
      <div className=" absolute top-2/9 w-fit aspect-3/5 pl-35 text-white flex flex-col gap-5">
        <div className="w-lvh">
          <p>Now playing:</p>
          <p className=" font-bold text-4xl">{props.title}</p>
        </div>
        <div className="flex">
          <Star className="text-yellow-300" fill="#FDE047" />
          <p>{props.vote_average}</p>
          <p className="text-gray-400">/10</p>
        </div>
        <div className="w-fit"> <p className="w-[400px] h-20">{props.overview}</p></div>
       
        <div className="pt-10"> <WatchButton /></div>
       
      </div>
    </CarouselItem>
  );
};
