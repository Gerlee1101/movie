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
export type GenreList = {
  id: number;
  name: string;
};
type GenreResponse = {
  genres: GenreList[];
};
export const Navigation = () => {
  const [movies, setMovies] = useState<GenreList[]>([]);

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
        setMovies(data.genres);
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
              <DropdownMenuContent className=" w-[577px] border bg-muted rounded-[6px] mt-1 ml-[490px] p-2.5 flex flex-col gap-2">
                <DropdownMenuLabel className="font-bold text-2xl">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  See lists of movies by genre
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="border" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="w-fit grid grid-cols-5 gap-4 ">
                    {movies.map((item, index) => {
                      return (
                        <Button
                          variant="default"
                          className=" bg-white h-5 w-auto wrap-anywhere pr-2 pl-2  text-black border rounded-2xl hover:bg-gray-100"
                          key={index}
                        >
                          {item.name}
                          <ChevronRight />
                        </Button>
                      );
                    })}
                  </DropdownMenuItem>
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
