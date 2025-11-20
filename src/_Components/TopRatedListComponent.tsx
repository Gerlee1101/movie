"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TopRatedList } from "./TopRatedList";
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
//     image: "cf17af987703b40890cd1344aa613664135f2e57.jpg",
//     rating: 6.9,
//     name: "Pulp Fiction",
//   },
//   {
//     image: "6c1e36de9221fa86d0b4e1a635830dc0332c811e.jpg",
//     rating: 6.9,
//     name: "The Lord of the Rings: Fellowship of the Kings",
//   },
//   {
//     image: "706beb6b0ee523250991ecb1d87699f60c1073d9.png",
//     rating: 6.9,
//     name: "The Good, the Bad and the Ugly",
//   },
//   {
//     image: "df800d0a908ecd9eb3fe52f587a5e1d0d29006ac.jpg",
//     rating: 6.9,
//     name: "Forrest Gump",
//   },
//   {
//     image: "d866cb3cba3f0c5f843cce238d40df0684d88488.jpg",
//     rating: 6.9,
//     name: "Fight Club",
//   },
//   {
//     image: "10f8b0b2fb5855ff72d7afbffcb7e63d2a0ed956.png",
//     rating: 6.9,
//     name: "Saving Private Ryan",
//   },
//   {
//     image: "2e25409a4c2ed4d2de131a5a578da7c6661daca9.png",
//     rating: 6.9,
//     name: "City of God ",
//   },
//   {
//     image: "3c89618fd6e7943c1ccbd074c826b6305cd89425.png",
//     rating: 6.9,
//     name: "The Green Mile ",
//   },
//   {
//     image: "efcd4e59ee05b883c3fe14fee45058479e958594.png",
//     rating: 6.9,
//     name: "Life is Beautiful",
//   },
//   {
//     image: "9b5c2b39321996ea21e05ed372aa26ac4e0d889d.png",
//     rating: 6.9,
//     name: "Terminator 2: Judgement Day",
//   },
// ];
export const TopRatedListComponent = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
        <h4 className="font-bold text-2xl">Top Rated</h4>
        <div className="flex items-center gap-2">
          <Button variant="link">See more</Button>
          <ArrowRight size={16} />
        </div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-[52px] pr-20 pl-20 pt-8">
        {movies.slice(0, 10).map((item, index) => {
          return (
            <TopRatedList
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
