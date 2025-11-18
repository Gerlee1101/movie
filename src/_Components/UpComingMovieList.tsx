import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
type UpcomingMovieListProps={
  image:string;
  rating:number;
  name:string;
}
export const UpComingMovieList = (props:UpcomingMovieListProps) => {
  return (
    <>
      <Card className="rounded-[6px] w-full flex flex-col py-0 bg-gray-200">
        <CardContent className="px-0  flex flex-col gap-4 ">
          <div className="">
            <img
              src={props.image}
              className="rounded-t-[6px] h-[340px] w-full object-cover"
            />
          </div>
          <div className="pl-2">
            <div className="flex">
              <Star className="text-yellow-300" fill="#FDE047" />
              <p>{props.rating} </p>
              <p className="text-gray-400">/10</p>
            </div>
            <p>{props.name}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
