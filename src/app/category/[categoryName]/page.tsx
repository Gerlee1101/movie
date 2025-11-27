"use client";

import { MovieSectionList } from "@/_Components/MovieSectionList";
import { categories } from "@/_constants";
import { useParams } from "next/navigation";
import { title } from "node:process";

type Params = {
  categoryName: string;
};

const CategorySectionDetail = () => {
  const { categoryName } = useParams<Params>();
  const title = categories.find(
    (el) => el.categoryName === categoryName
  )?.title;
  return (
    <div className=" gap-96">
      <MovieSectionList
        categoryName={categoryName}
        title={title || ""}
        showButton={false}
      />
    </div>
  );
};

export default CategorySectionDetail;
