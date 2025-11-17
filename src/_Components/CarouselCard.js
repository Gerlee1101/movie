import { Card, CardContent } from "@/components/ui/card";

export const CarouselCard = () => {
  return (
    <div className="w-screen border border-amber-300 ">
      <Card className="w-">
        <CardContent className="ml-20">
          <img src={props.image} />
          
        </CardContent>
      </Card>
    </div>
  );
};
