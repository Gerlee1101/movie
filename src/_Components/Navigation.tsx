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
import { ChevronDownIcon, MoonIcon, SearchIcon } from "lucide-react";

export const Navigation = () => {
  return (
    <div className="w-screen items-center justify-center font-sans dark:bg-black">
      <div className="w-screen   mt-3 ">
        <div className="w-screen flex justify-between items-center pr-16 pl-16 ">
          <div className="w-[92px] h-5 ">
            <img src="/Logo-Light mode.png" alt="logoMovie" />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ChevronDownIcon />
                  Genre
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="font-bold text-2xl">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  See lists of movies by genre
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Button className="p-3"></Button>
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
          <div className="w-9 h-9 border rounded-md border-gray-300 place-items-center place-content-center ">
            <MoonIcon className="w-3 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
