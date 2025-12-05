"use client";

import { GenresList } from "@/_Components/GenresList";
import { MoviesByGenre } from "@/_Components/MoviesByGenre";
import { MovieSectionList } from "@/_Components/MovieSectionList";
import { categories } from "@/_constants";

import { useParams } from "next/navigation";
import { title } from "node:process";

const GenresSection = () => {
  return (
    <div>
      <GenresList />
      <MoviesByGenre />
    </div>
  );
};

export default GenresSection;
