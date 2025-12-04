import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Play, PlayIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Movie } from "./MovieSectionList";
import { CarouselProps } from "./CarouselCard";

export const WatchButton = (props: CarouselProps) => {
  const [video, setVideo] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const videoRes = await fetch(
        `https://api.themoviedb.org/3/movie/${props.id}/videos?language=en-US`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
          },
        }
      );
      //
      const videoData = await videoRes.json();

      console.log(videoData.results[0].key);
      //   console.log(data);

      setVideo(videoData.results[0].key);
    };
    fetchData();
  }, []);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-black bg-background hover:bg-accent "
          >
            <PlayIcon />
            Watch Trailer
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[991px] h-[561px] rounded-none ">
          <DialogTitle>
            <ReactPlayer
              src={`https://www.youtube.com/watch?v=${video}`}
              width="992px"
              height="562px"
              className="bottom-6.5 right-6.5"
            />
          </DialogTitle>
        </DialogContent>
      </form>
    </Dialog>
  );
};
