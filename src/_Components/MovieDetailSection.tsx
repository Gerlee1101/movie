"use client";

import { Footer } from "@/_Components/Footer";
import { Movie } from "@/_Components/MovieSectionList";
import { Navigation } from "@/_Components/Navigation";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

type Params = {
  movieId: string;
};

export const MovieDetailSection = () => {
  const { movieId } = useParams<Params>();
  //   const { categoryName, title, showButton } = props;
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        // `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    };
    fetchData();
  }, []);
  return (
    <div className="w-[1080px] flex justify-between mt-[190px] ml-[180px] ">
  <div className="text-2xl font-semibold ">{movie?.title}
    <p>{movie?.release_date}</p>
  </div>
 <div className="flex flex-col">
  <p className="font-bold text-[12px]">Rating</p>
 <div className="flex gap-1 items-center ">
            <Star  size={24} strokeWidth={0} fill="#FDE047"  />
            <div className="flex flex-col">
            <p className="text-sm pb-1 font-bold">
              {movie?.vote_average}{" "}
              <span className="text-xs text-muted-foreground">/10</span> </p>
            <p className="text-[10px] align-text-top text-muted-foreground">   {movie?.vote_count}</p></div>
          </div>
          </div>
          </div>
          )
};
