"use client";
import { categories } from "@/_constants";
import { Movie, MovieSectionList } from "./MovieSectionList";

export const MovieSection = () => {
  return (
    <div>
      {categories.map((category) => {
        return (
          <MovieSectionList
            key={category.categoryName}
            categoryName={category.categoryName}
            title={category.title}
            showButton={category.showbutton}
            showPagination={false}
          />
        );
      })}
    </div>
  );
};
