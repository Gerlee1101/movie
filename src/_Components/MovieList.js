import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

export const MovieList = (props) => {
  return (
    <>
      <Card className="rounded-[6px] flex flex-col">
        <CardContent className="object-cover">
          <img src={props.image} />
          <div className="flex">
            <Star className="text-yellow-300" fill="#FDE047" />
            <p>{props.rating} </p>
            <p className="text-gray-400">/10</p>
          </div>
          <p>{props.name}</p>
        </CardContent>
      </Card>
    </>
  );
};
