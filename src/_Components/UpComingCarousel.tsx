import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselCard } from "./CarouselCard";

const cards = [
  {
    image: "/wicked.jpg",
    name: "Wicked",
    rating: 6.9,
    info: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
  {
    image: "/gladiator.jpg",
    name: "Gladiator II",
    rating: 6.9,
    info: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
  {
    image: "/Moana-2.png",
    name: "Moana 2",
    rating: 6.9,
    info: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
  },
];
export const UpComingCarousel = () => {
  return (
    <div className="w-screen mt-10 ">
      <Carousel className="w-screen">
        <CarouselContent className="">
          {cards.map((item, index) => {
            return (
              <CarouselCard
                image={item.image}
                name={item.name}
                rating={item.rating}
                info={item.info}
                key={index}
              />
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="left-10" />
        <CarouselNext className="right-10" />
      </Carousel>
    </div>
  );
};
