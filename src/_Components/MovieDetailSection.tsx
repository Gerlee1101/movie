"use client";

import { Footer } from "@/_Components/Footer";
import { Movie } from "@/_Components/MovieSectionList";
import { Navigation } from "@/_Components/Navigation";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";
import { MovieDetailVideo } from "./MovieDetailVideo";
import { MovieDetailOverview } from "./MovieDetailOverview";
import { Separator } from "@radix-ui/react-dropdown-menu";

type Params = {
  movieId: string;
};

export const MovieDetailSection = () => {
  const { movieId } = useParams<Params>();
  // const { categoryName, title, showButton } = props;
  const [movie, setMovie] = useState<Movie>();
  const [video, setVideo] = useState<string>("");
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
      // const data = await res.json();
      // const videoData = await videoRes.json();
      // console.log(data)
      // console.log(videoData.results[0]?.key);
      //     console.log(data);
      //     setMovie(data);
      //     // setVideo(videoData.results[0].key);
    };
    fetchData();
  }, []);

  function formatTime(min: number) {
    const hours = Math.floor(min / 60);
    const minutes = min % 60;
    return `${hours}h · ${minutes < 10 ? `0${minutes}` : minutes}m`;
  }

  console.log(formatTime(60));

  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col gap-4 ">
        <div></div>
        <div className="w-[1080px] flex justify-between ">
          <MovieDetailOverview />
        </div>
      </div>
    </div>
  );
};
