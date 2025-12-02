import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Movie } from "./MovieSectionList";
import { MovieCard } from "./MovieCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
type Params = {
  movieId: string;
};
export const MoreLikeThis = () => {
  const { movieId } = useParams<Params>();
  const [moreVideo, setMoreVideo] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const morelikeRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw",
          },
        }
      );
      const data = await morelikeRes.json();
      setMoreVideo(data.results);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div className="font-extrabold text-2xl">More like this</div>
        <div>see more</div>
      </div>
      <div className="grid grid-cols-5 gap-8 pt-10 pb-20">
        {moreVideo.slice(0, 5).map((el) => {
          return (
            <MovieCard
              backdrop_path={
                "https://image.tmdb.org/t/p/w500/" + el.poster_path
              }
              title={el.title}
              vote_average={el.vote_average}
              id={el.id}
              key={el.id}
            />
          );
        })}
      </div>
    </div>
  );
};
