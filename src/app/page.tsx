import {  UpComingMovieListComponent } from "@/_Components/UpComingMovieListComponent";
import { Navigation } from "@/_Components/Navigation";
import { UpComingCarousel } from "@/_Components/UpComingCarousel";


import Image from "next/image";
import { PopularMovieListComponent } from "@/_Components/PopularMovieListComponent";
import { TopRatedListComponent } from "@/_Components/TopRatedListComponent";
import { Footer } from "@/_Components/Footer";
import {  NavigationMenuComponent } from "@/_Components/NavigationMenuComponent";

export default function Movie() {
  return (
    <>
      <Navigation />

      <UpComingCarousel/>
      <UpComingMovieListComponent />
      <PopularMovieListComponent/>
      <TopRatedListComponent/>
      <Footer/>
    </>
  );
}
