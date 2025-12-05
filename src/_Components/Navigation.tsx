"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { GenresList } from "./GenresList";
// export type GenreList = {
//   id: number;
//   name: string;
// };

export const Navigation = () => {
  return (
    <div className="w-screen items-center justify-center font-sans dark:bg-black">
      <div className="w-screen   mt-3 ">
        <div className="w-screenfull flex justify-between items-center pr-16 pl-16">
          <div className="w-[92px] h-5 ">
            <img src="/Logo-Light mode.png" alt="logoMovie" />
          </div>
          <div className="flex gap-2 z-10">
            {/* <DropdownMenu>
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
                          className=" bg-white  w-auto  px-2 py-0 text-black border rounded-2xl hover:bg-gray-600 [a&]:hover:bg-secondary/90 "
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
            </DropdownMenu> */}
            <GenresList />
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
