"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PopularMovieList } from "./PopularMovieList";
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

// const movielist = [
//   {
//     image: "a5d580e9c9924c8d3c5e8e941a5ba1d2e52d8b4b.jpg",
//     rating: 6.9,
//     name: "The Shawshank Redemption",
//   },
//   {
//     image: "18d4e1523a9723ae5397841adf7fbaed84bd30b2.jpg",
//     rating: 6.9,
//     name: "The Godfather",
//   },
//   {
//     image: "030838bbe73cef80ea7c5a4d051f85ec9f54ff54.jpg",
//     rating: 6.9,
//     name: "The Dark Knight",
//   },
//   {
//     image: "e5f63d6a89bab25bc0763dfbbbf7c3bee6852e83.jpg",
//     rating: 6.9,
//     name: "12 Angry Men",
//   },
//   {
//     image: "3dda7d0fd43f8bf0d05709315bdef844728edcdd.jpg",
//     rating: 6.9,
//     name: "The Lord of the Rings: The  Return of the King",
//   },
//   {
//     image: "c7c024b2b3afd710377fb0b9f108ff36fba45e4c.png",
//     rating: 6.9,
//     name: "Internstellar",
//   },
//   {
//     image: "3acb3a09851aa126ab35026523f2e2e190b23fe7.png",
//     rating: 6.9,
//     name: "Se7en ",
//   },
//   {
//     image: "2956d72d5d02f54d89cfd16de886a197c7726cdd.png",
//     rating: 6.9,
//     name: "It’s a Wonderful life ",
//   },
//   {
//     image: "58b76625d56cec413aaa9f82fa807c4236d4e1eb.png",
//     rating: 6.9,
//     name: "Seven samurai",
//   },
//   {
//     image: "0b3261eb4bb822b1588e21cad535fbaad83aa44f.png",
//     rating: 6.9,
//     name: "The Silence of the Lambs",
//   },
// ];
export const PopularMovieListComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
        <h4 className="font-bold text-2xl">Popular</h4>
        <div className="flex items-center gap-2">
          <Button variant="link">See more</Button>
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-[52px] pr-20 pl-20 pt-8">
        {movies.slice(0, 10).map((item, index) => {
          return (
            <PopularMovieList
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
