import { UpComingMovieListComponent } from "@/_Components/UpComingMovieListComponent";
import { Navigation } from "@/_Components/Navigation";
import { UpComingCarousel } from "@/_Components/UpComingCarousel";

import { PopularMovieListComponent } from "@/_Components/PopularMovieListComponent";
import { TopRatedListComponent } from "@/_Components/TopRatedListComponent";
import { Footer } from "@/_Components/Footer";

import { MovieSection } from "@/_Components/MovieSection";

export default function Movie() {
  return (
    <>
      <Navigation />

      <UpComingCarousel />

      {/* <UpComingMovieListComponent /> */}
      <MovieSection />
      <PopularMovieListComponent />
      <TopRatedListComponent />
      <Footer />
    </>
  );
}
