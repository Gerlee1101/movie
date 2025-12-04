"use client";

import { Footer } from "@/_Components/Footer";
import { Movie } from "@/_Components/MovieSectionList";
import { Navigation } from "@/_Components/Navigation";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";

import { MovieDetailVideo } from "./MovieDetailVideo";
import { MovieDetailInfo } from "./MovieDetailInfo";
import { Badge } from "@/components/ui/badge";
import { MoreLikeThis } from "./MoreLikeThis";

type Params = {
  movieId: string;
};

export const MovieDetailOverview = () => {
  const { movieId } = useParams<Params>();
  //   const { categoryName, title, showButton } = props;
  const [movie, setMovie] = useState<Movie>();
  // const [video, setVideo] = useState<string>("");
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
      // const videoRes = await fetch(
      //   `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      //   // `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
      //     },
      //   }
      // );
      const data = await res.json();
      // const videoData = await videoRes.json();
      // console.log(data);
      // console.log(videoData.results[0]?.key);
      setMovie(data);
      // setVideo(videoData.results[0].key);
    };
    fetchData();
  }, []);

  function formatTime(min: number) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}h · ${minutes < 10 ? `0${minutes}` : minutes}m`;
  }

  // console.log(formatTime(60));
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col gap-4 ">
        <div className="w-full flex justify-between mt-[50px]  ">
          <div className="text-2xl font-semibold ">
            {movie?.title}
            <p className="text-[14px] font-normal">
              {movie?.release_date} · PG ·{formatTime(movie?.runtime || 0)}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-[12px]">Rating</p>
            <div className="flex gap-1 items-center ">
              <Star size={24} strokeWidth={0} fill="#FDE047" />
              <div className="flex flex-col">
                <p className="text-sm pb-1 font-bold">
                  {movie?.vote_average}{" "}
                  <span className="text-xs text-muted-foreground">/10</span>{" "}
                </p>
                <p className="text-[10px] align-text-top text-muted-foreground">
                  {" "}
                  {movie?.vote_count}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit gap-2 flex justify-between ">
          <img
            src={`${"https://image.tmdb.org/t/p/w500/"}${movie?.poster_path}`}
            className="w-[290px] h-[428px] "
          />
          <MovieDetailVideo />
        </div>
        <div className="flex gap-2 pt-5">
          {movie?.genres.map((el) => {
            return (
              <Badge variant="outline" key={el.id}>
                {el.name}
              </Badge>
            );
          })}
        </div>
        <div className="w-[1080px] text-black">{movie?.overview}</div>

        <MovieDetailInfo />
        <MoreLikeThis />
      </div>
    </div>
  );
};
