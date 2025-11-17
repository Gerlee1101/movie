import { Navigation } from "@/_Components/Navigation";
import { UpComingCarousel } from "@/_Components/UpComingCarousel";
import { Button } from "@/components/ui/button";



import Image from "next/image";

export default function Movie() {
  return (
    <>
      <Navigation />
      <UpComingCarousel />
    </>
  );
}
