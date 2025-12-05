"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronRight } from "lucide-react";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
export type MovieGenre = {
  id: number;
  name: string;
};
type GenreResponse = {
  genres: MovieGenre[];
};
// type Params = {
//   genres: [];
// };
export const GenresList = () => {
  const [genre, setGenre] = useState<MovieGenre[]>([]);
  // const { genres } = useParams<Params>();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const genreIds = searchParams.get("genreIds")?.split(",") || [];
  console.log(genreIds);
  const handleClickGenre = (genreId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const updateGenreIds = genreIds?.includes(genreId)
      ? genreIds.filter((id) => id !== genreId)
      : [...genreIds, genreId];

    params.set("genreIds", updateGenreIds.join(","));
    router.push(pathname + "?" + params);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            method: "Get",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw",
              accept: "application/json",
            },
          }
        );

        const data = (await res.json()) as GenreResponse;
        setGenre(data.genres);
        // console.log(data.genres);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex gap-2 z-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <ChevronDownIcon />
              Genre
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-[520px] border bg-muted rounded-[6px] mt-1 ml-[490px] pl-4 pr-4 flex flex-col gap-5">
            <DropdownMenuLabel className="font-bold text-2xl">
              Genres
            </DropdownMenuLabel>
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator className="border" />
            <DropdownMenuGroup className="flex flex-col pb-5 ">
              <div className="w-full flex flex-wrap gap-4 ">
                {genre.map((el) => {
                  return (
                    <Badge
                      key={el.id}
                      variant={
                        genreIds.includes(el.id.toString())
                          ? "default"
                          : "outline"
                      }
                      className=" w-auto  px-2 py-0"
                      onClick={() => handleClickGenre(el.id.toString())}
                    >
                      {el.name}

                      <ChevronRight className="ml-1" />
                    </Badge>
                  );
                })}
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
