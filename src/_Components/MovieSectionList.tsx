"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  id: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  genre_ids: [];
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  runtime: number;
  showButton: boolean;
};
type MovieSectionProps = {
  categoryName: string;
  title: string;
  showButton: boolean;
  showPagination: boolean;
};
type Response = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const MovieSectionList = (props: MovieSectionProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { categoryName, title, showButton, showPagination } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${categoryName}?language=en-US&page=${currentPage}`,
        // `${process.env.TMDB_BASE_URL}/movie/${categoryName}?language=en-US&page=1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
          },
        }
      );
      const data = (await res.json()) as Response;
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    fetchData();
  }, [categoryName, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div>
      <div className="flex justify-between pr-20 pl-20 pt-10 pb-10">
        <p className="text-4xl font-semibold ">{title}</p>
        {showButton && (
          <Link href={`/category/${categoryName}`}>
            <p>see more</p>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-5 gap-10 pr-20 pl-20">
        {movies?.slice(0, 10).map((el) => {
          return (
            <MovieCard
              backdrop_path={
                "https://image.tmdb.org/t/p/w500/" + el.poster_path
              }
              title={el.title}
              vote_average={el.vote_average}
              id={el.id}
              key={el.id}
            />
          );
        })}
      </div>
      <div className=" pr-20 pl-20 pt-5 pb-5 ">
        {showPagination && (
          <Pagination className="flex justify-end ">
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  Previous <ChevronLeft />
                </Button>
              </PaginationItem>
              {currentPage-1>2 &&( <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>)}
             
              {currentPage > 1 && (
                <PaginationItem>
                  <Button variant="outline" onClick={prevPage}>
                    {currentPage - 1}
                  </Button>
                </PaginationItem>
              )}

              <PaginationItem>
                <Button variant="default">{currentPage}</Button>
              </PaginationItem>   
              { currentPage+1<totalPages &&(<PaginationItem>
                <Button variant="outline" onClick={nextPage}>
                  {currentPage + 1}
                </Button>
              </PaginationItem>)}
              {currentPage+1>totalPages||currentPage>3 &&( <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>)}
           { currentPage + 1 < 5 ||currentPage<totalPages-1 && (<PaginationItem>
                <Button
                  variant="outline"
                  
                >
                  {totalPages} 
                </Button>
              </PaginationItem>)}
             
               
              <PaginationItem>
                <Button
                  variant="outline"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                >
                  Next <ChevronRight />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};
