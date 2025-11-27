"use client";

import { Footer } from "@/_Components/Footer";
import { Movie } from "@/_Components/MovieSectionList";
import { Navigation } from "@/_Components/Navigation";
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
  return <div>{movie?.title}</div>;
};
