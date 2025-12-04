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
import {
  ChevronDownIcon,
  ChevronRight,
  MoonIcon,
  SearchIcon,
} from "lucide-react";
import { ModeToggle } from "./ModeToggle";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useSearchParams } from "next/navigation";
export type GenreList = {
  id: number;
  name: string;
};
type GenreResponse = {
  genres: GenreList[];
};
export const Navigation = () => {
  const [genres, setGenres] = useState<GenreList[]>([]);
  const searchParams = useSearchParams();
  const genreIds=searchParams.get(`genre_ids`)
  console.log(genreIds);
const handleClickGenre=(genreId:number)=>{
  console.log(genreId);
}
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
        setGenres(data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-screen items-center justify-center font-sans dark:bg-black">
      <div className="w-screen   mt-3 ">
        <div className="w-screen flex justify-between items-center pr-16 pl-16 ">
          <div className="w-[92px] h-5 ">
            <img src="/Logo-Light mode.png" alt="logoMovie" />
          </div>
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
                <DropdownMenuLabel>
                  See lists of movies by genre
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border" />
                <DropdownMenuGroup className="flex flex-col pb-5 ">
                  <div className="w-full flex flex-wrap gap-4 ">
                    {genres.map((item, index) => {
                      return (
                        <Badge
                          variant="secondary"
                          className=" bg-white  w-auto  px-2 py-0 text-black border rounded-2xl hover:bg-gray-100 [a&]:hover:bg-secondary/30 "
                          key={index}
                        >
                          {item.name}

                          <ChevronRight className="ml-1" />
                        </Badge>
                      );
                    })}
                  </div>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="relative flex items-center focus-within:text-gray-400">
              <SearchIcon className="w-5 h-5 absolute ml-3 text-gray-400" />
              <Input
                type="search"
                placeholder="Search . . ."
                className="pl-10 pr-3"
              />
            </div>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
