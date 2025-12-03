"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselCard } from "./CarouselCard";
import { useEffect, useState } from "react";
import { Movie } from "./MovieSectionList";

// const cards = [
//   {
//     image: "/wicked.jpg",
//     name: "Wicked",
//     rating: 6.9,
//     info: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//   },
//   {
//     image: "/gladiator.jpg",
//     name: "Gladiator II",
//     rating: 6.9,
//     info: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//   },
//   {
//     image: "/Moana-2.png",
//     name: "Moana 2",
//     rating: 6.9,
//     info: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//   },
// ];
export const UpComingCarousel = () => {
  const[slides, setSlides]=useState<Movie[]>([])
  useEffect(()=>{
    const fetchData= async()=>{
      const res=await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'`,
      {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
     accept: "application/json",
    },
     
      }
    );
    const data=(await res.json());
    setSlides(data);
    console.log(data)
    };
  fetchData();
  },[])
  return (
    <div className="w-screen mt-10 ">
      <Carousel className="w-screen">
        <CarouselContent className="">
          {slides.map((el) => {
            return (
              <CarouselCard
                backdrop_path={"https://image.tmdb.org/t/p/original/"+el.poster_path}
                title={el.title}
                vote_average={el.vote_average}
                overview={el.overview}
                key={el.id}
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
