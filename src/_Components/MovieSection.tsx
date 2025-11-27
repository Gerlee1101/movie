"use client";
import { categories } from "@/_constants";
import { MovieSectionList } from "./MovieSectionList";

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
          />
        );
      })}
      {/* <div className=" gap-96">
        <MovieSectionList
          categoryName="upcoming"
          title="Upcoming"
          showButton={true}
        /> 
      </div>
      <div className=" gap-96">
        <MovieSectionList
          categoryName="top_rated"
          title="Top Rated"
          showButton={true}
        />
      </div>
      <div className=" gap-96">
        <MovieSectionList
          categoryName="popular"
          title="Popular"
          showButton={true}
        />
      </div> */}
    </div>
  );
};
