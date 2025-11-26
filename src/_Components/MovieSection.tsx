"use client";
import { MovieSectionList } from "./MovieSectionList";

export const MovieSection=()=> {
  return (
    <div>
      <div className=" gap-96 bg-red-200">
        <MovieSectionList 
          categoryName="upcoming"
          title="Upcoming"
          showButton={true}
        />
      </div>
      <div className=" gap-96 bg-amber-200">
        <MovieSectionList
          categoryName="top_rated"
          title="Top Rated"
          showButton={true}
        />
      </div>
      <div className=" gap-96 bg-blue-200">
        <MovieSectionList
          categoryName="popular"
          title="Popular"
          showButton={true}
        />
      </div>
    </div>
  );
}