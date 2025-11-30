"use client";

import { Footer } from "@/_Components/Footer";
import { Movie } from "@/_Components/MovieSectionList";
import { Navigation } from "@/_Components/Navigation";
import { Star } from "lucide-react";
import { useParams } from "next/navigation";
import { use, useEffect, useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

type Params = {
  movieId: string;
};

export const MovieDetailVideo = () => {
  const { movieId } = useParams<Params>();
  //   const { categoryName, title, showButton } = props;
  const [movie, setMovie] = useState<Movie>();
  const [video, setVideo] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
   
      const videoRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        // `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
          },
        }
      );
    //   const data = await res.json();
      const videoData = await videoRes.json();
    
    //   console.log(videoData.results[0]?.key);
    //   console.log(data);
     
      setVideo(videoData.results[0].key);
    };
    fetchData();
  }, []);
return( <ReactPlayer
            src={`https://www.youtube.com/watch?v=${video}`}
            width="780px"
            height="428px"
          />)

  };
