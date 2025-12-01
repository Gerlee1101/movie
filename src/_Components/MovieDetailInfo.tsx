import { Separator } from "@radix-ui/react-dropdown-menu";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export type Cast = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};
export type Crew = {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

type Params = {
  movieId: string;
};

type Credits = {
  stars: string;
  director: Crew[];
  writer: Crew[];
};

export const MovieDetailInfo = () => {
  const { movieId } = useParams<Params>();
  const [credit, setCredits] = useState<Credits>();

  useEffect(() => {
    const fetchData = async () => {
      const castRes = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTA5ZWJjYjRkNjZiM2NkNWM3Mjg3OGYyNWZhMjc3OCIsIm5iZiI6MTc2MzU0NzUwNi41MjMsInN1YiI6IjY5MWQ5OTcyMzMwMzUyZWI1MTJkNDMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HrXmCirix39iPdFjJ9ayIrWn-n-oJ2aRHVfqfXa6ilw`,
          },
        }
      );

      const res = await castRes.json();

      const cast = res.cast
        .sort((a: Cast, b: Cast) => b.popularity - a.popularity)
        .slice(0, 3)
        .map((el: Cast) => el.name)
        .join(" · ");

      const writers = res.crew.filter((el: Crew) => el.job === "Writer" && "");
      const director = res.crew.filter((el: Crew) => el.job === "Director");

      setCredits({ stars: cast, writer: writers, director: director });
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <p className="font-bold text-muted-foreground">Director</p>
        <div className="flex pl-10">
          {credit?.director.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </div>
      </div>
      <Separator className="bg-gray-300 w-[1080px] h-px" />
      <div className="flex">
        <p className="font-bold text-muted-foreground">Writer</p>
        <div className="flex pl-14">
          {credit?.writer.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </div>
      </div>
      <Separator className="bg-gray-300 w-[1080px] h-px" />
      <div className="flex">
        <p className="font-bold text-muted-foreground">Stars</p>
        <div className="flex pl-14">{credit?.stars}</div>
      </div>
      <Separator className="bg-gray-300 w-[1080px] h-px" />
    </div>
  );
};
