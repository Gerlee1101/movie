"use client";

import { UpComingMovieList } from "./UpComingMovieList";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

//   {
//     image: "641528080ffbeccc1a7cdd3a5199e0755d66e253.jpg",
//     rating: 6.9,
//     name: "Dear Santa",
//   },
//   {
//     image: "4b087764bc03cf6c5fe844d5ce89f9658466dfef.jpg",
//     rating: 6.9,
//     name: "How To Train Your Dragon Live Action",
//   },
//   {
//     image: "7aa1157596c5c5026e3cccbd4a9ca91b9d63dc7a.jpg",
//     rating: 6.9,
//     name: "Alien Romulus",
//   },
//   {
//     image: "a2ea3dd2e396dc1c5e4ace3bda976b474aaef0b3.jpg",
//     rating: 6.9,
//     name: "From the Ashes",
//   },
//   {
//     image: "42257c9e0fafe04642928fbdc70a93ae0f01002d.jpg",
//     rating: 6.9,
//     name: "Space Dogg",
//   },
//   {
//     image: "d9b1c0d7d14a24b806271aee27997170978ff626.jpg",
//     rating: 6.9,
//     name: "The Order",
//   },
//   {
//     image: "9e653e1be01fc9c4092dfdecd24369e2487d8635.jpg",
//     rating: 6.9,
//     name: "Y2K ",
//   },
//   {
//     image: "b35627f67090bf8bfd9ce9490b6575d8d0114025.jpg",
//     rating: 6.9,
//     name: "Solo Leveling: ReAwakening ",
//   },
//   {
//     image: "327277d4dd6fe464242bf3ceb00cbf7c51bd7f42.jpg",
//     rating: 6.9,
//     name: "Get Away",
//   },
//   {
//     image: "1a78359a45da022f45cbd49977b6b63d7ecfb7c8.png",
//     rating: 6.9,
//     name: "Sonic the Hedgehog 3",
//   },
// ];
export const UpComingMovieListComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
          {
            method: "Get",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw",
              accept: "application/json",
            },
          }
        );

        const data = (await res.json()) as Response;
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex justify-between pr-20 pl-20 items-center pt-10 gap-8">
        <h4 className="font-bold text-2xl">Upcoming</h4>
        <div className="flex items-center gap-2">
          <Button variant="link">See more</Button>
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-[52px] pr-20 pl-20 pt-8">
        {movies.slice(0, 10).map((item, index) => {
          return (
            <UpComingMovieList
              image={"https://image.tmdb.org/t/p/w500/" + item.poster_path}
              name={item.title}
              rating={item.vote_average}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};
