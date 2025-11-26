"use client";
import { MovieSectionList } from "@/_Components/MovieSectionList";

import { use } from "react";

const CategorySectionDetail = ({
  params,
}: {
  params: Promise<{ categoryName: string }>;
}) => {
  const { categoryName } = use(params);

  return (
    <div className=" gap-96 bg-red-200">
      <MovieSectionList
        categoryName={categoryName}
        title={categoryName}
        showButton={false}
      />
    </div>
  );
};

export default CategorySectionDetail;