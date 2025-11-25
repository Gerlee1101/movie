"use client";
import Link from "next/link";
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
type MovieSectionProps = {
  categoryName: string;
  title: string;
  showButton: boolean;
};

export const MovieSection = (props: MovieSectionProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { categoryName, title, showButton } = props;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`,
          },
        }
      );
      const data = await res.json();

      setMovies(data.results);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <p className="text-6xl font-semibold">{title}</p>
        {showButton && (
          <Link href={`/category/${categoryName}`}>
            <p>see more</p>
          </Link>
        )}
      </div>

      {movies.map((el) => (
        <div key={el.id}>{el.title}</div>
      ))}
    </div>
  );
};
