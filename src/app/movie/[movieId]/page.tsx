"use client";
import { Footer } from "@/_Components/Footer";
import { MovieDetailSection } from "@/_Components/MovieDetailSection";

import { Movie } from "@/_Components/MovieSectionList";
import { Navigation } from "@/_Components/Navigation";

const MovieDetailPage = () => {
  return (
    <div>
      <Navigation />
      <MovieDetailSection />
      <Footer />
    </div>
  );
};

export default MovieDetailPage;
