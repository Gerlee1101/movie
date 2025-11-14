import { Navigation } from "@/_Components/Navigation";
import { UpComingCarousel } from "@/_Components/UpComingCarousel";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDownIcon, MoonIcon, SearchIcon } from "lucide-react";

import Image from "next/image";

export default function Movie() {
  return (
    <>
      <Navigation />
      <UpComingCarousel />
    </>
  );
}
