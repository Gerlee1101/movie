"use client";
import { useEffect, useState } from "react";
import { Movie } from "./MovieSectionList";
import { useSearchParams } from "next/navigation";
import { MovieCard } from "./MovieCard";

export const MoviesByGenre = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const searchParams = useSearchParams();
  const genreIds = searchParams.get(`genreIds`)?.split(",") || [];
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        ` https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreIds}&page=${1}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
          },
        }
      );
      const data = await res.json();
      setMovies(data.results);
    };
    fetchData();
  }, [genreIds]);
  return (
    <div className="grid grid-cols-3">
      {movies?.slice(0, 10).map((el) => {
        return (
          <MovieCard
            backdrop_path={"https://image.tmdb.org/t/p/w500/" + el.poster_path}
            title={el.title}
            vote_average={el.vote_average}
            id={el.id}
            key={el.id}
          />
        );
      })}
    </div>
  );
};
