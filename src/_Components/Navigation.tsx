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

export const Navigation = () => {
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
              <DropdownMenuContent className=" w-fit border bg-muted rounded-[6px] mt-1 ml-[470px] p-2.5 flex flex-col gap-2">
                <DropdownMenuLabel className="font-bold text-2xl">
                  Genres
                </DropdownMenuLabel>
                <DropdownMenuLabel>
                  See lists of movies by genre
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className=" w-[537px] gap-3 flex flex-col items-center ">
                    <DropdownMenuItem className="flex gap-4">
                      <Button
                        variant="default"
                        className=" bg-muted h-5   border rounded-2xl hover:bg-gray-100 hover:text-black text-secondary-foreground"
                      >
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex gap-4">
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                      <Button
                        variant="default"
                        className=" bg-white h-5 text-black border rounded-2xl hover:bg-gray-100"
                      >
                        {" "}
                        Action <ChevronRight />
                      </Button>
                    </DropdownMenuItem>
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
