import {  UpComingMovieListComponent } from "@/_Components/UpComingMovieListComponent";
import { Navigation } from "@/_Components/Navigation";
import { UpComingCarousel } from "@/_Components/UpComingCarousel";


import Image from "next/image";
import { PopularMovieListComponent } from "@/_Components/PopularMovieListComponent";

export default function Movie() {
  return (
    <>
      <Navigation />
      <UpComingCarousel />
      <UpComingMovieListComponent />
      <PopularMovieListComponent/>
    </>
  );
}
