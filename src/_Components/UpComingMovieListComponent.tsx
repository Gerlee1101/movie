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
